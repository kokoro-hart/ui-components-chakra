import React from "react";

import { Container } from "@/components/Layouts/Container";
import { ReferenceLayout } from "@/components/Layouts/ReferenceLayout";
import { fv } from "@/features/Reference/Accordion";
import { Nav } from "@/features/Reference/Nav";

const Frameworks = () => {
  return (
    <ReferenceLayout fv={fv}>
      <Container mt={{ base: "32px", md: "40px" }}>
        <Nav slug="accordion" />
      </Container>
    </ReferenceLayout>
  );
};

export default Frameworks;
