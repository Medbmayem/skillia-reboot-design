
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
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
        subject: `Nouveau message de contact: ${record.subject}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${record.firstname} ${record.lastname}</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Téléphone:</strong> ${record.phone || 'Non renseigné'}</p>
          <p><strong>Pays:</strong> ${record.country}</p>
          <p><strong>Société:</strong> ${record.company}</p>
          <p><strong>Secteur:</strong> ${record.industry}</p>
          <p><strong>Fonction:</strong> ${record.function}</p>
          <p><strong>Sujet:</strong> ${record.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${record.message}</p>
          <hr>
          <p><small>Reçu le ${new Date(record.created_at).toLocaleString('fr-FR')}</small></p>
        `,
      }),
    })

    if (res.ok) {
      console.log('Email sent successfully')
      return new Response('OK', { status: 200 })
    } else {
      throw new Error(`Failed to send email: ${res.status}`)
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response('Error', { status: 500 })
  }
})
