import React, {lazy, Suspense}from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


const Home = lazy(() => import("../../Pages/Home/Home"));
const About = lazy(() => import("../../Pages/About/About"));
const Skills = lazy(() => import("../../Pages/Skills/Skills"));
const Project = lazy(() => import("../../Pages/Project/Project"));
const Team = lazy(() => import("../../Pages/Team/Team"));
const LearnMore = lazy(() => import("../../Pages/LearnMore/LearnMore"));
const Feedback = lazy(() => import("../../Pages/Feedback/Feedback"));

export default function AnimatedRouter() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skils" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
