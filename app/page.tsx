import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import React from "react";

const page = () => {
  return (
    <main className="bg">
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
};

export default page;
