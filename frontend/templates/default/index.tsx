import React from 'react';
import styles from './TemplateName.module.scss';
import clsx from 'clsx';

interface TemplateNameProps {}

export const TemplateName: React.FC<TemplateNameProps> = () => (
  <div className={styles.templateName}>TemplateName Component</div>
);
