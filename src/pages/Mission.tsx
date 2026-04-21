import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Eye,
  Target,
  Heart,
  Lightbulb,
  Users,
  Globe,
  Shield,
  Leaf,
  GraduationCap,
  Handshake
} from 'lucide-react';

import { motion } from "framer-motion";

const Mission = () => {

  // ---------------- ANIMATION VARIANTS ----------------
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  // ---------------- DATA (UNCHANGED) ----------------
  const missionPillars = [
    {
      icon: Shield,
      title: "Preserve Heritage",
      description:
        "Preserve and promote Mithila heritage—art, literature, language, festivals, cuisine, and living traditions—within the United States and worldwide."
    },
    {
      icon: Target,
      title: "Art for Social Good",
      description:
        "Leverage art for social good by aligning programs with the United Nations SDGs, using visual storytelling to highlight issues such as gender equality, quality education, climate action, and life on land."
    },
    {
      icon: Users,
      title: "Empower Artists",
      description:
        "Empower artists, especially women and youth, by providing platforms, workshops, recognition, and economic opportunities for their creative contributions."
    },
    {
      icon: Globe,
      title: "Cross-Cultural Dialogue",
      description:
        "Foster cross-cultural dialogue among Nepali, Indian, and global communities, promoting harmony, inclusion, and shared understanding."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Cultural Authenticity",
      description:
        "Preserving the genuine traditions, techniques, and spiritual essence of Mithila art while respecting its origins in the Mithila region of Nepal and India."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Adapting ancient wisdom to address contemporary challenges including climate change, gender equality, and sustainable development through SDG-aligned programming."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description:
        "Supporting Maithil artists, especially women who have been the primary custodians of this tradition for millennia, through fair practices and skill development."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "Building bridges with UN agencies, diplomatic missions, cultural institutions, and diaspora communities for collective impact."
    }
  ];

  const visionGoals = [
    "Mithila heritage recognized as a global cultural asset",
    "Museum of Mithila Heritage (MoM) in New York",
    "Self-sustaining artist cooperatives worldwide",
    "Digital archive accessible to researchers globally",
    "SDG-aligned programming reaching every continent",
    "Youth leadership programs for cultural ambassadors"
  ];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="show"
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">

          <motion.h1
            variants={fadeUp}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Mission & <span className="gradient-text-primary">Vision</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-muted-foreground"
          >
            Guided by ancient wisdom, driven by modern purpose—using art as a force for creativity, sustainability, and community resilience.
          </motion.p>

          <motion.img
            src="https://i.imgur.com/weZ3iPx.jpeg"
            alt="Mithila Art Cover"
            className="w-full mt-8 rounded-2xl shadow-xl"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* WHO WE SERVE */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="container mx-auto px-4 text-center">

          <motion.h2 variants={fadeUp} className="font-playfair text-4xl font-bold mb-4">
            Who We Serve
          </motion.h2>

          <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Our mission is centered around the communities who preserve and carry forward Mithila heritage.
          </motion.p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Maithil Women Artists",
              "Youth & Students",
              "Diaspora Communities",
              "Rural Artisans (Nepal & India)",
              "Global Researchers"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-5 rounded-2xl hover:shadow-xl"
              >
                <p className="text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FLAGSHIP PROGRAMS */}
      <motion.section
        className="py-20 bg-muted/30"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="container mx-auto px-4 text-center">

          <motion.h2 variants={fadeUp} className="font-playfair text-4xl font-bold mb-4">
            Our Flagship Initiatives
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "🎨", title: "Art for SDGs Program" },
              { icon: "🏛", title: "Mithila Festival USA" },
              { icon: "🧑‍🎓", title: "Youth Cultural Leadership" },
              { icon: "🌍", title: "UN Cultural Exhibitions" },
              { icon: "📚", title: "Art Education Workshops" }
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-semibold">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* THEORY OF CHANGE */}
      <motion.section className="py-20" whileInView={{ opacity: 1 }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Our Theory of Change
          </h2>

          <div className="glass-card rounded-3xl p-10">
            <p className="text-lg text-muted-foreground">
              Traditional Mithila Art → Empowerment of Artists → Economic Opportunity → Cultural Preservation → Global Awareness of SDGs
            </p>
          </div>
        </div>
      </motion.section>

      {/* WHERE WE WORK */}
      <motion.section className="py-20 bg-muted/30" whileInView={{ opacity: 1 }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-10">Where We Work</h2>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">

            <img
              src="https://i.imgur.com/8QZ9w2A.jpeg"
              className="rounded-3xl shadow-xl"
            />

            <div className="space-y-4 text-left">
              {[
                "Mithila Region (Nepal & India)",
                "New York, USA (Headquarters)",
                "Global Diaspora Communities"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="py-20 bg-gradient-peacock text-white text-center">
        <h2 className="font-playfair text-3xl font-bold mb-4">
          Be Part of the Movement
        </h2>

        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Join us in preserving Mithila heritage and empowering communities.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <Button asChild><Link to="/partner">🤝 Partner</Link></Button>
          <Button asChild variant="outline"><Link to="/artists">🎨 Artists</Link></Button>
          <Button asChild><Link to="/donate">💛 Donate</Link></Button>

        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default Mission;
  