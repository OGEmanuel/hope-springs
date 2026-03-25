import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface ThankYouEmailProps {
  fullName?: string;
}

export const ThankYouEmail = ({ fullName = 'there' }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for your enquiry</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Row>
            <Img
              src="https://res.cloudinary.com/dl56ef7sx/image/upload/v1774468975/logo_dddk4g.svg"
              alt="Hope Springs logo"
              width="200"
              height="auto"
              style={{ margin: '0 auto', marginBottom: '20px' }}
            />
          </Row>
          <Row>
            <Text style={heading}>Thank You, {fullName}!</Text>
          </Row>
          <Row>
            <Text style={text}>
              We appreciate you reaching out to us. We've received your enquiry
              and will get back to you as soon as possible.
            </Text>
          </Row>
          <Row>
            <Text style={text}>
              In the meantime, if you have any questions or need assistance,
              feel free to contact us.
            </Text>
          </Row>
          <Row>
            <Link href="https://www.hopespringsbehavioral.com/" style={button}>
              Visit Our Website
            </Link>
          </Row>
          <Row>
            <Text style={footer}>
              © 2024 Hope Springs Behavioral. All rights reserved.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif",
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
  border: '1px solid #2d3132',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const heading = {
  fontSize: '32px',
  fontWeight: '700',
  margin: '16px 0',
  color: '#2d3132',
  borderBottom: '3px solid #1a6a3b',
  paddingBottom: '8px',
};

const text = {
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
  color: '#2d3132',
};

const footer = {
  color: '#2d3132',
  fontSize: '12px',
  margin: '16px 0',
  opacity: '0.8',
};

const button = {
  backgroundColor: '#ffffff',
  border: '2px solid #1a6a3b',
  borderRadius: '6px',
  color: '#1a6a3b',
  fontSize: '16px',
  fontWeight: '700',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
  margin: '16px 0',
  transition: 'all 0.2s ease',
};
