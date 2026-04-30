import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const EnrollChildPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
     ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number with Nepal country code
    const whatsappNumber = "9779817617494";

    // Use \n for line breaks. encodeURIComponent will convert it to %0A
    const text =
      `*New Mithila Art Enrollment*\n\n` +
      `*Parent Name:* ${formData.parentName}\n` +
      `*Child Name:* ${formData.childName}\n` +
      `*Child Age:* ${formData.childAge}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-100">
      <div className="max-w-3xl mx-auto">
        <div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>

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

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium">Parent Name</label>
            <Input
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Enter parent name"
              className="mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Child Name</label>
            <Input
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="Enter child name"
              className="mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Child Age</label>
            <Input
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              type="number"
              placeholder="Enter age"
              className="mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
              className="mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="mt-1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your child's interest..."
              className="mt-1"
            />
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button type="submit" variant="cultural" size="lg" className="w-full">
              Submit Enrollment
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default EnrollChildPage;