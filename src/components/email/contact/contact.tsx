import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
  insuranceProvider: string;
}

export const ContactEmail = ({
  fullName,
  emailAddress,
  phoneNumber,
  insuranceProvider,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src="https://res.cloudinary.com/dl56ef7sx/image/upload/v1774468975/logo_dddk4g.svg"
            width="120"
            height="40"
            alt="Hope Springs logo"
            style={logo}
          />
          <Hr style={hr} />
          <Text style={heading}>New Contact Form Submission</Text>

          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{fullName}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${emailAddress}`} style={link}>
                {emailAddress}
              </Link>
            </Text>

            <Text style={label}>Phone</Text>
            <Text style={value}>{phoneNumber}</Text>

            <Text style={label}>Insurance Provider</Text>
            <Text style={value}>{insuranceProvider ?? 'None'}</Text>

            <Text style={label}>Message</Text>
            <Text style={value}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            © 2024 Hope Springs Behavioral. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const box = {
  padding: '48px 40px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  border: '1px solid #2d3132',
};

const logo = {
  margin: '0 auto 20px',
  display: 'block',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#2d3132',
  margin: '20px 0',
  borderBottom: '3px solid #1a6a3b',
  paddingBottom: '8px',
};

const section = {
  margin: '24px 0',
};

const label = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#1a6a3b',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  margin: '16px 0 4px',
};

const value = {
  fontSize: '16px',
  color: '#2d3132',
  margin: '0',
  lineHeight: '1.6',
};

const link = {
  color: '#1a6a3b',
  textDecoration: 'none',
  fontWeight: '500',
};

const hr = {
  borderColor: '#2d3132',
  margin: '20px 0',
  opacity: '0.2',
};

const footer = {
  fontSize: '12px',
  color: '#2d3132',
  textAlign: 'center' as const,
  margin: '0',
  opacity: '0.8',
};

export default ContactEmail;
