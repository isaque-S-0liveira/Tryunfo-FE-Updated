/* eslint-disable max-len */
import Card from '../Card/Card';
import Form from '../Form/Form';
import './GeneratorCheap.css';

function GeneratorCheap() {
  return (
    <section id="generatorCheapContainer" className="container  mt-5">
      <div className="row pt-5">
        <Form />
        <Card className="d-none d-md-block" />
      </div>
    </section>
  );
}

export default GeneratorCheap;
