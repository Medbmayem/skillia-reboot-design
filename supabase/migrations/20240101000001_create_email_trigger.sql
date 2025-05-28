
-- Create trigger function to call edge function
CREATE OR REPLACE FUNCTION trigger_send_contact_email()
RETURNS trigger AS $$
BEGIN
  -- Call the edge function asynchronously
  PERFORM
    net.http_post(
      url := 'https://your-project-ref.supabase.co/functions/v1/send-contact-email',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer ' || current_setting('app.settings.service_role_key') || '"}'::jsonb,
      body := json_build_object('record', row_to_json(NEW))::text
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
CREATE TRIGGER on_contact_message_insert
  AFTER INSERT ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION trigger_send_contact_email();
