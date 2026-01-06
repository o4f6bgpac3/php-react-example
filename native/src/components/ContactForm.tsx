import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useContactForm } from '@shared/hooks/useContactForm';
import { theme } from '@/theme';

export function ContactForm() {
  const { formData, status, updateField, submit } = useContactForm();

  if (status === 'success') {
    return (
      <View style={styles.alert}>
        <Text style={styles.alertText}>Thanks! We'll be in touch soon.</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.field}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          placeholderTextColor={theme.colors.base300}
          value={formData.name}
          onChangeText={(value) => updateField('name', value)}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="your@email.com"
          placeholderTextColor={theme.colors.base300}
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Your message..."
          placeholderTextColor={theme.colors.base300}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={formData.message}
          onChangeText={(value) => updateField('message', value)}
        />
      </View>

      <Pressable
        style={[styles.button, status === 'loading' && styles.buttonDisabled]}
        onPress={submit}
        disabled={status === 'loading'}
      >
        <Text style={styles.buttonText}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.base100,
    borderRadius: theme.radius.box,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: theme.colors.baseContent,
    marginBottom: 4,
  },
  input: {
    backgroundColor: theme.colors.base100,
    borderWidth: 1,
    borderColor: theme.colors.base300,
    borderRadius: theme.radius.button,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: theme.colors.baseContent,
  },
  textarea: {
    height: 100,
    paddingTop: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: theme.radius.button,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: theme.colors.primaryContent,
    fontSize: 16,
    fontWeight: '600',
  },
  alert: {
    backgroundColor: theme.colors.success,
    padding: 16,
    borderRadius: theme.radius.box,
  },
  alertText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});
