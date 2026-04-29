import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


const EnrollChildPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-100">
      <div className="max-w-3xl mx-auto">
        <div>
          <button
            onClick={() => navigate("/")}
            className="flex item-center page-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Enroll Your Child
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Join our Mithila Art learning program and connect your child with
            cultural heritage.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6"
        >
          {/* Parent Name */}
          <div>
            <label className="text-sm font-medium">Parent Name</label>
            <Input placeholder="Enter parent name" className="mt-1" />
          </div>

          {/* Child Name */}
          <div>
            <label className="text-sm font-medium">Child Name</label>
            <Input placeholder="Enter child name" className="mt-1" />
          </div>

          {/* Age */}
          <div>
            <label className="text-sm font-medium">Child Age</label>
            <Input type="number" placeholder="Enter age" className="mt-1" />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter email" className="mt-1" />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <Input placeholder="Enter phone number" className="mt-1" />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <Textarea
              placeholder="Tell us about your child’s interest..."
              className="mt-1"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button variant="cultural" size="lg" className="w-full">
              Submit Enrollment
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};
export default EnrollChildPage;
