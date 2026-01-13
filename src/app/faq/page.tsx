import Faq from "@/components/faqs/Faq/Faq";

const page = () => {
  return (
    <div>
      <Faq
        items={[
          { question: "This is question1", answer: <>This is answer1</> },
          { question: "This is question2", answer: <>This is answer2</> },
        ]}
      />
    </div>
  );
};

export default page;
