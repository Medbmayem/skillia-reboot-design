import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const { record } = await req.json()
  
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'contact@skillia.fr',
        to: ['contact@skillia.fr'],
        subject: `Nouveau message de contact: ${record.subject || 'Général'}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${record.firstname} ${record.lastname || ''}</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Téléphone:</strong> ${record.phone || 'Non renseigné'}</p>
          <p><strong>Pays:</strong> ${record.country || 'Non renseigné'}</p>
          <p><strong>Société:</strong> ${record.company || 'Non renseigné'}</p>
          <p><strong>Secteur:</strong> ${record.industry || 'Non renseigné'}</p>
          <p><strong>Fonction:</strong> ${record.function || 'Non renseigné'}</p>
          <p><strong>Sujet:</strong> ${record.subject || 'Non renseigné'}</p>
          <p><strong>Message:</strong></p>
          <p>${record.message || ''}</p>
          <hr>
          <p><small>Reçu le ${new Date(record.created_at).toLocaleString('fr-FR')}</small></p>
        `,
      }),
    })

    if (res.ok) {
      console.log('Email sent successfully')
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    } else {
      const errorBody = await res.text()
      console.error('Resend error:', errorBody)
      throw new Error(`Failed to send email: ${res.status}`)
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }
})
