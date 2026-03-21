import { fadeUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import SectionHeader from './SectionHeader';
import { Field, FieldContent, FieldError, FieldLabel } from './ui/field';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
  };
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        subtitle='Contact'
        title="Let's make something great together!"
      />

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 mt-10">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {/* Name Field */}
    <Controller
      name="name"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Name</FieldLabel>
          <FieldContent>
            <Input {...field} id={field.name} placeholder="Your Name" />
            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />

    {/* Company Field */}
    <Controller
      name="company"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Company</FieldLabel>
          <FieldContent>
            <Input {...field} id={field.name} placeholder="Your Company" />
            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />

    {/* Email Field */}
    <Controller
      name="email"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Email</FieldLabel>
          <FieldContent>
            <Input {...field} id={field.name} type="email" placeholder="Your Email" />
            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />

    {/* Phone Field */}
    <Controller
      name="phone"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
          <FieldContent>
            <Input {...field} id={field.name} placeholder="Your Phone" />
            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />

    {/* Message Field */}
    <Controller
      name="message"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field className="md:col-span-2" data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Message</FieldLabel>
          <FieldContent>
            <Textarea {...field} id={field.name} placeholder="Your Message" rows={6} />
            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />
  </div>

  {/* Buttons */}
  <div className="flex gap-2 mt-4">
    <Button type="submit">Submit</Button>
    <Button type="button" variant="outline" onClick={() => form.reset()}>
      Reset
    </Button>
  </div>
</form>
    </motion.section>
  );
}
