import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading title={"Hello"} />
      <Section>This is the way, I mean the section</Section>
      <Section title={"Different title"}>And the second child</Section>
      <Counter setCount={setCount}>Count is: {count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "👩🏻‍💻 code"]}
        render={(item: string) => <span className="bold gold">{item}</span>}
      />
    </>
  );
}

export default App;
