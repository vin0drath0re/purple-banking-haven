
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Building, Users, Globe, ShieldCheck, Award } from "lucide-react";

const About = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in financial services, Sarah has led PurpleBank through tremendous growth and innovation.",
      initial: "S"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings extensive expertise in fintech and digital transformation to drive PurpleBank's technological advancement.",
      initial: "M"
    },
    {
      name: "David Williams",
      role: "Chief Financial Officer",
      bio: "David oversees all financial operations, ensuring PurpleBank maintains its strong financial position and growth trajectory.",
      initial: "D"
    },
    {
      name: "Lisa Rodriguez",
      role: "Chief Customer Officer",
      bio: "Lisa is dedicated to creating exceptional experiences for our customers through innovative service approaches.",
      initial: "L"
    }
  ];
  
  const values = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "We maintain the highest standards of integrity and transparency in all our dealings."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're committed to improving the communities we serve through financial empowerment."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in our products, services, and customer experiences."
    },
    {
      icon: Globe,
      title: "Inclusion",
      description: "We believe in creating financial solutions that are accessible to everyone."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                  About Us
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Transforming banking for <span className="text-primary">everyday people</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Founded in 2010, PurpleBank is on a mission to make banking more accessible, transparent, and personalized for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-lg group">
                    Our Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-lg">
                    Join Our Team
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="purple-glass-card p-8 rounded-2xl relative z-10">
                  <Building className="h-16 w-16 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground mb-6">
                    "To create a more equitable financial system by providing innovative banking solutions that empower individuals and businesses to achieve their goals."
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xl font-bold text-primary">2.5M+</p>
                      <p className="text-sm text-muted-foreground">Customers</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary">32</p>
                      <p className="text-sm text-muted-foreground">Countries</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary">1,200+</p>
                      <p className="text-sm text-muted-foreground">Employees</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary">$50B+</p>
                      <p className="text-sm text-muted-foreground">Assets Managed</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-60 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div
              ref={ref}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Our Values
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Guided by strong principles
              </h2>
              <p className="text-lg text-muted-foreground">
                Our core values drive everything we do, from product development to customer service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-2xl transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <value.icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Our Team
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                Meet our leadership
              </h2>
              <p className="text-lg text-muted-foreground">
                Our experienced team is dedicated to transforming the banking industry and serving our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-purple-glow hover:-translate-y-1"
                >
                  <div className="mb-4 w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-primary text-2xl font-bold">
                    {member.initial}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                Our Journey
              </div>
              <h2 className="heading-lg text-gray-900 mb-4">
                The PurpleBank story
              </h2>
              <p className="text-lg text-muted-foreground">
                From our founding to today, we've been on a mission to transform banking for the better.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">2010</h3>
                    <h4 className="text-lg font-medium text-primary mb-2">Founding</h4>
                    <p className="text-muted-foreground">PurpleBank was founded with a vision to create a more accessible and transparent banking experience.</p>
                  </div>
                  <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center relative">
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center relative">
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2">2015</h3>
                    <h4 className="text-lg font-medium text-primary mb-2">Digital Transformation</h4>
                    <p className="text-muted-foreground">Launched our award-winning mobile app and expanded digital banking capabilities to serve customers better.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">2018</h3>
                    <h4 className="text-lg font-medium text-primary mb-2">International Expansion</h4>
                    <p className="text-muted-foreground">Expanded operations to 15 countries, bringing our innovative banking solutions to customers worldwide.</p>
                  </div>
                  <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center relative">
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center relative">
                    <div className="h-3 w-3 bg-white rounded-full"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2">2023</h3>
                    <h4 className="text-lg font-medium text-primary mb-2">Today</h4>
                    <p className="text-muted-foreground">Serving over 2.5 million customers worldwide with innovative financial solutions and industry-leading customer satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
