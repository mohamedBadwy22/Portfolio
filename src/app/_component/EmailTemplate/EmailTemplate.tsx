import { EmailTemplateProps } from "@/types/email";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{subject || "New portfolio message"}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section>
            <Text style={styles.kicker}>New message</Text>
            <Heading as="h1" style={styles.title}>
              {subject || "Portfolio contact"}
            </Heading>
          </Section>

          <Section style={styles.infoBlock}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{name}</Text>

            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{email}</Text>
          </Section>

          <Section style={styles.messageSection}>
            <Text style={styles.label}>Message</Text>
            <Section style={styles.messageBlock}>
              <Text style={styles.message}>{message}</Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    margin: 0,
    padding: "32px 0",
    backgroundColor: "#f8fafc",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "560px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    border: "1px solid #a7f3d0",
    borderRadius: "16px",
    overflow: "hidden",
  },
  kicker: {
    margin: 0,
    padding: "24px 24px 0",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#059669",
  },
  title: {
    margin: "12px 0 0",
    padding: "0 24px",
    fontSize: "28px",
    lineHeight: "1.3",
    fontWeight: 700,
    color: "#0f172a",
  },
  infoBlock: {
    padding: "24px",
  },
  label: {
    margin: "0 0 4px",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#64748b",
  },
  value: {
    margin: "0 0 16px",
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#0f172a",
  },
  messageSection: {
    padding: "0 24px 24px",
  },
  messageBlock: {
    width: "100%",
    maxWidth: "100%",
    padding: "16px 20px",
    backgroundColor: "#dff5ec",
    border: "1px solid #a7f3d0",
    borderRadius: "12px",
  },
  message: {
    margin: 0,
    fontSize: "17px",
    lineHeight: "1.7",
    whiteSpace: "pre-wrap",
    color: "#0f172a",
  },
} as const;
