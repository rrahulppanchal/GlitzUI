"use client"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import Link from "next/link"
import React from "react"
import { Input } from "@/components/ui/input";
interface FormValues {
    name: string;
    email: string;
    age: number | null;
    message: string;
    country: string;
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age: Yup.number().positive('Age must be a positive number').integer('Age must be an integer').nullable(),
    message: Yup.string().min(10, 'Message must be at least 10 characters'),
    country: Yup.string().required('Country is required'),
  });
  
  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];
const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik: FormikProps<FormValues> = useFormik<FormValues>({
      initialValues: {
        name: '',
        email: '',
        age: null,
        message: '',
        country: '',
      },
      validationSchema,
      onSubmit: (values) => {
        setIsSubmitting(true);
        console.log(values);
        
        // Simulate form submission
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setIsSubmitting(false);
        // }, 2000);
      },
    });
    console.log(formik.getFieldProps('form'));
    
    return <><main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
    <div className="mx-auto grid w-full max-w-6xl gap-2">
      <h1 className="text-3xl font-semibold">Validation</h1>
    </div>
    <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
      <nav className="grid gap-4 text-sm text-muted-foreground">
        <Link href="#" className="font-semibold text-primary">
        Validation
        </Link>
        <Link href="#">Security</Link>
        <Link href="#">Integrations</Link>
        <Link href="#">Support</Link>
        <Link href="#">Organizations</Link>
        <Link href="#">Advanced</Link>
      </nav>
      <div className="grid gap-6" >
      <>
            <Input {...formik.getFieldProps('name')} name='name'onChange={formik.handleChange} />
          <span>{formik.getFieldMeta('name').error}</span>
     

      {/* <FormField control={formik.getFieldMeta('country').error ? 'invalid' : 'valid'}>
        <FormItem>
          <FormLabel>Country</FormLabel>
          <FormControl>
            <Select {...formik.getFieldProps('country')}>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormField.Error>{formik.getFieldMeta('country').error}</FormField.Error>
        </FormItem>
      </FormField> */}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </>
      </div>
    </div>
  </main></>
}

export default Form