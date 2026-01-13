import Accordion from "@/components/accordions/Accordion/Accordion";

const AccordiansPage = () => {
  return (
    <div>
      <Accordion
        items={[
          {
            header: "This is question1",
            children: <>This is answer1</>,
            counter: 1,
          },
          {
            header: "This is question2",
            children: <>This is answer2</>,
            counter: 2,
          },
        ]}
      />
    </div>
  );
};

export default AccordiansPage;
