import React from 'react';
import styles from './Component.module.scss';

interface TemplateNameProps {}

const TemplateName: React.FC<TemplateNameProps> = () => {
  return <div className={styles.templateName}>TemplateName Component</div>;
};

export default TemplateName;
