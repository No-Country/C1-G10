import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionItem, AccordionHeader } from "reactstrap";


export const Itinerary = () => {
  return (
    <div>
      <Accordion flush toggle={function noRefCheck() {}}>
        <AccordionItem>
          <AccordionHeader targetId="1">Day 1</AccordionHeader>
          <AccordionItem accordionId="1">
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionItem>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Day 2</AccordionHeader>
          <AccordionItem accordionId="2">
            <strong>This is the second item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionItem>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Day 3</AccordionHeader>
          <AccordionItem accordionId="3">
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </AccordionItem>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
