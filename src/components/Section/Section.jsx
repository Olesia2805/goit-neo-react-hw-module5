import style from './Section.module.css';
import clsx from 'clsx';

const Section = ({ children, className }) => {
  const sectionClassName = clsx(className, {
    // [style.example]: className === 'example',
    [style.section]: true,
  });
  return <section className={sectionClassName}>{children}</section>;
};

export default Section;
