import Button from "@reintroducing/my-package";
import css from "./Foo.module.scss";

const Foo = (props) => {
  return (
    <>
      <div className={css.root}>Local CSS module</div>
      <Button>Test</Button>
    </>
  );
};

export default Foo;
