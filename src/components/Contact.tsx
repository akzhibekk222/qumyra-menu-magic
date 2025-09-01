import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Instagram, Clock, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-accent mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the warmth of Qumyra. We're located in the heart of Atyrau, 
            ready to serve you an unforgettable dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-warm border-border/50">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Atyrau, Kazakhstan<br />
                      Premier District<br />
                      Downtown Area
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-warm border-border/50">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-3">+7 (7122) 50-XX-XX</p>
                    <Button variant="premium" size="sm">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-warm border-border/50">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent mb-2">Opening Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 12:00 - 23:00</p>
                      <p>Friday - Saturday: 12:00 - 01:00</p>
                      <p>Sunday: 12:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-warm border-border/50">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent mb-2">Follow Us</h3>
                    <Button variant="outline" size="sm">
                      <Instagram className="h-4 w-4" />
                      @qumyra_atyrau
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="bg-gradient-primary p-8 rounded-2xl text-center text-primary-foreground shadow-elegant">
              <h3 className="font-elegant text-3xl font-bold mb-4">Reserve Your Table</h3>
              <p className="text-lg opacity-90 mb-6">
                Secure your spot at Qumyra and let us create an exceptional 
                dining experience just for you.
              </p>
              <Button variant="elegant" size="lg" className="w-full mb-4">
                <Calendar className="h-5 w-5" />
                Reserve a Table
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
                <Phone className="h-5 w-5" />
                Order a Call
              </Button>
            </div>

            <div className="text-center p-6 bg-secondary/30 rounded-xl">
              <h4 className="font-semibold text-lg text-accent mb-3">Special Events</h4>
              <p className="text-muted-foreground mb-4">
                Host your special occasions at Qumyra. Perfect for celebrations, 
                business dinners, and private events.
              </p>
              <Button variant="outline">Contact for Events</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;