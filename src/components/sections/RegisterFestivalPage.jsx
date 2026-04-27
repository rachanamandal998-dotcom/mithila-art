import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const RegisterFestivalPage = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Festival Registration
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Join the Mithila Festival USA and experience culture, art, and tradition.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input placeholder="Enter your full name" className="mt-1" />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter your email" className="mt-1" />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <Input placeholder="Enter phone number" className="mt-1" />
          </div>

          {/* Number of Attendees */}
          <div>
            <label className="text-sm font-medium">Number of Attendees</label>
            <Input type="number" placeholder="e.g. 2" className="mt-1" />
          </div>

          {/* Participation Type */}
          <div>
            <label className="text-sm font-medium">Participation Type</label>
            <select className="w-full mt-1 border rounded-md p-2">
              <option>Visitor</option>
              <option>Artist</option>
              <option>Volunteer</option>
              <option>Workshop Participant</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <Textarea
              placeholder="Any special requests or details..."
              className="mt-1"
            />
          </div>

          {/* SUBMIT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button variant="hero" size="lg" className="w-full">
              Register Now
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default RegisterFestivalPage;
