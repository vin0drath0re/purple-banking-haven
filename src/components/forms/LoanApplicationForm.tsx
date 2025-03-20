
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { CalendarIcon, ChevronRight, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  streetAddress: z.string().min(3, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please select your state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
});

const employmentSchema = z.object({
  employmentStatus: z.enum(["full-time", "part-time", "self-employed", "unemployed", "retired"]),
  employerName: z.string().optional(),
  jobTitle: z.string().optional(),
  monthlyIncome: z.string().min(1, "Please enter your monthly income"),
  yearsAtJob: z.string().optional(),
});

const loanDetailsSchema = z.object({
  loanType: z.enum(["personal", "home", "auto", "student"]),
  loanAmount: z.string().min(1, "Please enter the loan amount"),
  loanPurpose: z.string().min(5, "Please describe the purpose of the loan"),
  loanTerm: z.enum(["12", "24", "36", "48", "60", "72", "84"]),
});

const confirmationSchema = z.object({
  creditCheck: z.boolean().refine(val => val === true, {
    message: "You must consent to a credit check",
  }),
  termsAndConditions: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormData = z.infer<typeof personalInfoSchema> & 
  z.infer<typeof employmentSchema> & 
  z.infer<typeof loanDetailsSchema> & 
  z.infer<typeof confirmationSchema>;

export function LoanApplicationForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const maxSteps = 4;
  
  const form = useForm<FormData>({
    resolver: zodResolver(
      step === 1 
        ? personalInfoSchema 
        : step === 2 
        ? employmentSchema 
        : step === 3 
        ? loanDetailsSchema 
        : confirmationSchema
    ),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      employmentStatus: "full-time",
      employerName: "",
      jobTitle: "",
      monthlyIncome: "",
      yearsAtJob: "",
      loanType: "personal",
      loanAmount: "",
      loanPurpose: "",
      loanTerm: "36",
      creditCheck: false,
      termsAndConditions: false,
    },
    mode: "onChange",
  });
  
  const handleNext = async () => {
    let formData;
    
    if (step === 1) {
      formData = form.getValues();
      const result = personalInfoSchema.safeParse(formData);
      if (!result.success) {
        form.trigger();
        return;
      }
    } else if (step === 2) {
      formData = form.getValues();
      const result = employmentSchema.safeParse(formData);
      if (!result.success) {
        form.trigger();
        return;
      }
    } else if (step === 3) {
      formData = form.getValues();
      const result = loanDetailsSchema.safeParse(formData);
      if (!result.success) {
        form.trigger();
        return;
      }
    }
    
    if (step < maxSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const onSubmit = (data: FormData) => {
    toast.success("Application submitted", {
      description: "Your loan application has been submitted successfully. We'll contact you soon.",
    });
    
    console.log("Form submitted:", data);
    
    // In a real application, you would submit this data to your backend
    // For now, we'll just navigate back to the loans page
    setTimeout(() => {
      navigate("/loans");
    }, 2000);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {Array.from({ length: maxSteps }, (_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                  step > i + 1 
                    ? "bg-primary text-white" 
                    : step === i + 1 
                    ? "bg-primary text-white border-2 border-primary-foreground" 
                    : "bg-gray-100 text-gray-400"
                )}
              >
                {i + 1}
              </div>
              <div className="text-xs mt-1 font-medium">
                {i === 0 ? "Personal" : i === 1 ? "Employment" : i === 2 ? "Loan Details" : "Confirm"}
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded-full" />
          <div 
            className="absolute top-0 left-0 h-2 bg-primary rounded-full transition-all" 
            style={{ width: `${(step / maxSteps) * 100}%` }} 
          />
        </div>
      </div>
      
      <Card className="rounded-xl border border-border shadow-sm mb-8">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
                  <p className="text-muted-foreground">Please provide your personal details.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(123) 456-7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="AL">Alabama</SelectItem>
                              <SelectItem value="AK">Alaska</SelectItem>
                              <SelectItem value="AZ">Arizona</SelectItem>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="CO">Colorado</SelectItem>
                              <SelectItem value="CT">Connecticut</SelectItem>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              {/* Add more states as needed */}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="10001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Employment Information</h2>
                  <p className="text-muted-foreground">Please provide your employment details.</p>
                  
                  <FormField
                    control={form.control}
                    name="employmentStatus"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Employment Status</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="full-time" />
                              </FormControl>
                              <FormLabel className="font-normal">Full-time</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="part-time" />
                              </FormControl>
                              <FormLabel className="font-normal">Part-time</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="self-employed" />
                              </FormControl>
                              <FormLabel className="font-normal">Self-employed</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="unemployed" />
                              </FormControl>
                              <FormLabel className="font-normal">Unemployed</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="retired" />
                              </FormControl>
                              <FormLabel className="font-normal">Retired</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {form.watch("employmentStatus") !== "unemployed" && 
                   form.watch("employmentStatus") !== "retired" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="employerName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employer Name</FormLabel>
                              <FormControl>
                                <Input placeholder="XYZ Corporation" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Software Engineer" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="yearsAtJob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years at Current Job</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" step="0.5" placeholder="2.5" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  
                  <FormField
                    control={form.control}
                    name="monthlyIncome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Income ($)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            placeholder="5000" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your gross monthly income before taxes.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Loan Details</h2>
                  <p className="text-muted-foreground">Please provide information about the loan you're applying for.</p>
                  
                  <FormField
                    control={form.control}
                    name="loanType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select loan type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="personal">Personal Loan</SelectItem>
                            <SelectItem value="home">Home Loan</SelectItem>
                            <SelectItem value="auto">Auto Loan</SelectItem>
                            <SelectItem value="student">Student Loan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="loanAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount ($)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="1000" 
                            placeholder="10000" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="loanTerm"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Term (months)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select loan term" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="12">12 months (1 year)</SelectItem>
                            <SelectItem value="24">24 months (2 years)</SelectItem>
                            <SelectItem value="36">36 months (3 years)</SelectItem>
                            <SelectItem value="48">48 months (4 years)</SelectItem>
                            <SelectItem value="60">60 months (5 years)</SelectItem>
                            <SelectItem value="72">72 months (6 years)</SelectItem>
                            <SelectItem value="84">84 months (7 years)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="loanPurpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Purpose</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe why you need this loan" 
                            className="resize-none min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Confirmation</h2>
                  <p className="text-muted-foreground">Please review your application and confirm the terms.</p>
                  
                  <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">Personal Information</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                        <div className="text-sm">
                          <span className="text-gray-500">Name:</span> {form.getValues("firstName")} {form.getValues("lastName")}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Email:</span> {form.getValues("email")}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Phone:</span> {form.getValues("phone")}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Date of Birth:</span> {form.getValues("dateOfBirth") ? format(form.getValues("dateOfBirth"), "PPP") : ""}
                        </div>
                        <div className="text-sm col-span-2">
                          <span className="text-gray-500">Address:</span> {form.getValues("streetAddress")}, {form.getValues("city")}, {form.getValues("state")} {form.getValues("zipCode")}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900">Employment Information</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                        <div className="text-sm">
                          <span className="text-gray-500">Status:</span> {form.getValues("employmentStatus")}
                        </div>
                        {form.getValues("employmentStatus") !== "unemployed" && 
                         form.getValues("employmentStatus") !== "retired" && (
                          <>
                            <div className="text-sm">
                              <span className="text-gray-500">Employer:</span> {form.getValues("employerName")}
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Job Title:</span> {form.getValues("jobTitle")}
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Years at Job:</span> {form.getValues("yearsAtJob")}
                            </div>
                          </>
                        )}
                        <div className="text-sm">
                          <span className="text-gray-500">Monthly Income:</span> ${form.getValues("monthlyIncome")}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900">Loan Details</h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                        <div className="text-sm">
                          <span className="text-gray-500">Loan Type:</span> {form.getValues("loanType")}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Amount:</span> ${form.getValues("loanAmount")}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Term:</span> {form.getValues("loanTerm")} months
                        </div>
                        <div className="text-sm col-span-2">
                          <span className="text-gray-500">Purpose:</span> {form.getValues("loanPurpose")}
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-4 border-t border-gray-200 space-y-4">
                      <FormField
                        control={form.control}
                        name="creditCheck"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I consent to a credit check
                              </FormLabel>
                              <FormDescription>
                                We'll use this information to assess your application.
                              </FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="termsAndConditions"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the terms and conditions
                              </FormLabel>
                              <FormDescription>
                                By checking this box, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                              </FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between pt-4 border-t border-gray-200">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handlePrevious}
                    className="rounded-lg"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < maxSteps ? (
                  <Button 
                    type="button" 
                    onClick={handleNext}
                    className="rounded-lg"
                  >
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="bg-primary rounded-lg"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
