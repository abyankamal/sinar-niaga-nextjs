// components/ContactEmail.tsx
import React from "react";
import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phoneNumber,
  message,
}) => (
  <Html>
    <Body>
      <Container>
        <Heading>Hello, You Got A Messages from {name}</Heading>
        <Section>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
          <Text>Phone Number: {phoneNumber}</Text>
          <Text>Message:</Text>
          <Text>{message}</Text>
        </Section>
        <Text>Best Regards,</Text>
        <Text>Your Support Team</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
