import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from '@react-email/components';

const CareerEmail = (formData: {
  fullName: string;
  resume: string;
  phoneNumber: string;
  email: string;
  position: string;
}) => {
  const { fullName, resume, phoneNumber, email, position } = formData;

  return (
    <Html>
      <Head />
      <Preview>New career application received</Preview>
      <Body
        style={{
          margin: '0',
          padding: '0',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#ffffff',
        }}
      >
        <Container
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #2d3132',
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#2d3132',
                borderBottom: '3px solid #1a6a3b',
                paddingBottom: '8px',
                marginBottom: '16px',
              }}
            >
              New Application Submitted
            </Text>
            <Text
              style={{
                fontSize: '16px',
                color: '#2d3132',
                marginBottom: '12px',
              }}
            >
              A new candidate has applied for the {position} position.
            </Text>
            <Text
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#1a6a3b',
                marginBottom: '8px',
              }}
            >
              Candidate Details:
            </Text>
            <Text
              style={{
                fontSize: '16px',
                color: '#2d3132',
                marginBottom: '4px',
              }}
            >
              Name: {fullName}
            </Text>
            <Text
              style={{
                fontSize: '16px',
                color: '#2d3132',
                marginBottom: '4px',
              }}
            >
              Phone: {phoneNumber}
            </Text>
            <Text
              style={{
                fontSize: '16px',
                color: '#2d3132',
                marginBottom: '4px',
              }}
            >
              Email: {email}
            </Text>
            <Text
              style={{
                fontSize: '16px',
                color: '#2d3132',
                marginBottom: '4px',
              }}
            >
              Position: {position}
            </Text>
            <Text
              style={{
                fontSize: '16px',
                color: '#2d3132',
                marginBottom: '4px',
              }}
            >
              Resume: {resume}
            </Text>
          </Section>
          <Section
            style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid #2d3132',
            }}
          >
            <Text style={{ fontSize: '16px', color: '#2d3132' }}>
              Please review the application and take appropriate action.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CareerEmail;
