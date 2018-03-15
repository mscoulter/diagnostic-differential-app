export default {
    diverticulitis: {
        id: '0001',
        displayName: 'diverticulitis',
        clinical_features: [
            'left lower quadrant pain',
            'constant pain',
            'previous episode of similar pain',
            'nausea',
            'vomiting',
            'low grade fever',
            'tender mass',
            'guarding',
            'rebound tenderness',
            'diarrhea',
            'constipation'],
        relatedDiagnoses: [
            'colorectal cancer',
            'acute appendicitis',
            'inflammatory bowel disease',
            'infectious colitis',
            'ischemic colitis',
            'tubo-ovarian abscess',
            'ovarian cyst',
            'ovarian torsion',
            'ectopic pregnancy',
            'cystitis',
            'nephrolithiasis']
    },
    colorectal_cancer: {
        id: '0002',
        displayName: 'colorectal cancer',
        clinical_features: [
            'hematochezia',
            'melena',
            'abdominal pain',
            'iron deficiency anemia',
            'change in bowel habits',
            'abdominal distention',
            'nausea',
            'vomiting',
            'blood per rectum',
            'diarrhea',
            'constipation',
            'early satiety'],
        relatedDiagnoses: [
            'hemorrhoids',
            'diverticulitis',
            'inflammatory bowel disease']
    },
    acute_appendicitis: {
        id: '0003',
        displayName: 'acute appendicitis',
        clinical_features: [
            'right lower quadrant abdominal pain',
            'anorexia',
            'nausea',
            'vomiting',
            'indigestion',
            'indigestion',
            'flatulence',
            'bowel irregularity',
            'diarrhea',
            'malaise',
            'low grade fever'],
        relatedDiagnoses: [
            'perforated appendix',
            'cecal diverticulitis',
            'meckel’s diverticulitis',
            'acute ileitis',
            'inflammatory bowel disease']
    },
    inflammatory_bowel_disease: {
        id: '0004',
        displayName: 'inflammatory bowel disease',
        clinical_features: [
            'diarrhea',
            'hematochezia',
            'frequent bowel movements',
            'colicky abdominal pain',
            'urgency',
            'tenesmus',
            'incontinence',
            'constipation',
            'insidious onset',
            'abdominal cramps',
            'fever',
            'fatigue',
            'weight loss', 'anemia'],
        relatedDiagnoses: [
            'medication-associated colitis',
            'diverticular colitis',
            'solitary rectal ulcer syndrome',
            'diversion colitis',
            'infectious colitis']
    },
    clostridium_difficile_colitis: {
        id: '0005',
        displayName: 'clostridium difficile colitis',
        clinical_features: [
            'watery diarrhea',
            'frequent stools',
            'lower abdominal pain',
            'low-grade fever',
            'nausea',
            'anorexia',
            'history of antibiotic therapy'],
        relatedDiagnoses: [
            'celiac disease',
            'collagenous colitis',
            'inflammatory bowel disease',
            'postinfectious irritable bowel syndrome']
    },
    ischemic_colitis: {
        id: '0006',
        displayName: 'ischemic colitis',
        clinical_features: [
            'abdominal pain',
            'left lower quadrant abdominal pain',
            'left upper quadrant abdominal pain',
            'continuous abdominal pain',
            'hematochezia'],
        relatedDiagnoses: [
            'acute mesenteric ischemia',
            'infectious colitis',
            'inflammatory bowel disease',
            'diverticulitis',
            'radiation enteritis',
            'colon carcinoma',
            'solitary rectal ulcer syndrome']
    },
    tubo_ovarian_abscess: {
        id: '0007',
        displayName: 'tubo-ovarian abscess',
        clinical_features: [
            'acute pain',
            'lower abdominal pain',
            'fever',
            'chills',
            'vaginal discharge',
            'chronic pain'],
        relatedDiagnoses: [
            'pelvic inflammatory disease',
            'ovarian mass',
            'ruptured ovarian cyst',
            'ovarian torsion',
            'dysmenorrhea',
            'ectopic pregnancy',
            'septic abortion',
            'miscarriage',
            'appendicitis',
            'infectious gastroenteritis',
            'inflammatory bowel disease',
            'irritable bowel syndrome',
            'diverticulitis',
            'constipation',
            'cholecystitis',
            'cystitis',
            'pyelonephritis',
            'nephrolithiasis',
            'urethritis']
    },
    ruptured_ovarian_cyst: {
        id: '0008',
        displayName: 'ruptured ovarian cyst',
        clinical_features: [
            'sudden onset',
            'unilateral pain',
            'lower abdominal pain',
            'abdominal pain',
            'pain following intercourse',
            'sharp pain',
            'pain following exercise'],
        relatedDiagnoses: [
            'hemorrhagic ovarian cyst',
            'ruptured ovarian cyst',
            'adnexal torsion']
    },
    ectopic_pregnancy: {
        id: '0009',
        displayName: 'ectopic pregnancy',
        clinical_features: [
            'vaginal bleeding',
            'abdominal pain',
            'pregnancy',
            'unprotected sex',
            '6-8 weeks after last menstrual period',
            'breast tenderness',
            'frequent urination',
            'nausea'],
        relatedDiagnoses: [
            'spontaneous abortion',
            'gestational trophoblastic disease',
            'subchorionic hematoma']
    },
    acute_uncomplicated_cystitis: {
        id: '0010',
        displayName: 'acute uncomplicated cystitis',
        clinical_features: [
            'acute dysuria',
            'urinary frequency',
            'urinary urgency',
            'suprapubic pain',
            'gross hematuria',
            'new incontinence'],
        relatedDiagnoses: [
            'vaginitis',
            'urethritis',
            'painful bladder syndrome',
            'pelvic inflammatory disease']
    },
    nephrolithiasis: {
        id: '0011',
        displayName: 'nephrolithiasis',
        clinical_features: [
            'paroxysmal pain',
            'severe pain',
            'flank pain',
            'pain radiating to testicle or labium',
            'gross hematuria',
            'unilateral flank pain',
            'nausea',
            'vomiting',
            'dysuria',
            'urgency'],
        relatedDiagnoses: [
            'pyelonephritis',
            'ectopic pregnancy',
            'ovarian cyst rupture',
            'dysmenorrhea',
            'acute intestinal obstruction',
            'biliary colic']
    },
    acute_mesenteric_ischemia: {
        id: '0012',
        displayName: 'acute mesenteric ischemia',
        clinical_features: [
            'acute onset',
            'abdominal pain',
            'metabolic acidosis',
            'normal abdominal exam'],
        relatedDiagnoses: [
            'infectious gastroenteritis',
            'inflammatory bowel disease',
            'ketoacidosis']
    },
    angiodysplasia: {
        id: '0013',
        displayName: 'angiodysplasia',
        clinical_features: [
            'chronic hematochezia',
            'recurrent hematochezia',
            'hematochezia'],
        relatedDiagnoses: [
            'diverticulitis',
            'hemorrhoid']
    },
    adnexal_torsion: {
        id: '0014',
        displayName: 'adnexal torsion',
        clinical_features: [
            'nausea',
            'vomiting',
            'unilateral pain',
            'abdominal pain'],
        relatedDiagnoses: [
            'ectopic pregnancy',
            'ruptured ovarian cyst',
            'tuboovarian abscess']
    },
    pelvic_inflammatory_disease: {
        id: '0015',
        displayName: 'pelvic inflammatory disease',
        clinical_features: [
            'lower abdominal pain',
            'gradual onset',
            'bilateral pain',
            'fever',
            'abnormal uterine bleeding'],
        relatedDiagnoses: [
            'ectopic pregnancy',
            'ovarian cyst rupture',
            'endometriosis',
            'cystitis',
            'appendicitis',
            'diverticultis',
            'irritable bowel syndrome']
    },
    endometriosis: {
        id: '0016',
        displayName: 'endometriosis',
        clinical_features: [
            'pelvic pain',
            'dysmenorrhea',
            'dyspareunia',
            'infertility',
            'pelvic pressure',
            'bowel dysfunction',
            'bladder dysfunction',
            'abnormal uterine bleeding',
            'low back pain',
            'chronic fatigue'],
        relatedDiagnoses: [
            'adenomyosis',
            'interstitial cystitis',
            'pelvic inflammatory disease',
            'irritable bowel syndrome']
    },
    chronic_mesenteric_ischemia: {
        id: '0017',
        displayName: 'chronic mesenteric ischemia',
        clinical_features: [
            'pain with meals',
            'weight loss'],
        relatedDiagnoses: [
            'malignancy',
            'chronic cholecystitis',
            'chronic pancreatitis',
            'peptic ulcer disease',
            'functional bowel disorder']
    },
    splenic_infarction: {
        id: '0018',
        displayName: 'splenic infarction',
        clinical_features: [
            'severe left upper quadrant pain',
            'fever',
            'left upper quadrant abdominal tenderness',
            'nausea',
            'vomiting',
            'splenomegaly'],
        relatedDiagnoses: [
            'splenomegaly',
            'splenic infarction',
            'splenic rupture']
    },
    toxic_megacolon: {
        id: '0019',
        displayName: 'toxic megacolon',
        clinical_features: [
            'severe diarrhea',
            'hematochezia',
            'malaise',
            'abdominal pain',
            'abdominal distention',
            'lower abdominal tenderness'],
        relatedDiagnoses: [
            'volvulus',
            'intestinal pseudo-obstruction']
    },
    interstitial_cystitis: {
        id: '0020',
        displayName: 'interstitial cystitis',
        clinical_features: [
            'pelvic tenderness',
            'relief with voiding',
            'pelvic pressure',
            'suprapubic discomfort',
            'low back pain',
            'urinary frequency',
            'urinary urgency',
            'nocturia'],
        relatedDiagnoses: [
            'bladder cancer',
            'uterine leiomyoma',
            'bladder stone',
            'urethral diverticulum',
            'acute cystitis']
    },
    irritable_bowel_syndrome: {
        id: '0021',
        displayName: 'irritable bowel syndrome',
        clinical_features: [
            'chronic abdominal pain',
            ' worsening of pain with defecation',
            'relief with defecation',
            'emotional stress',
            'bloating',
            'flatulence'],
        relatedDiagnoses: [
            'celiac disease',
            'microscopic colitis',
            'small intestinal bacterial overgrowth',
            'inflammatory bowel disease']
    },
    abdominal_aortic_aneurysm: {
        id: '0022',
        displayName: 'abdominal aortic aneurysm',
        clinical_features: [
            'abdominal pain',
            'back pain',
            'flank pain',
            'fever',
            'malaise',
            'severe pain',
            'pulsatile mass',
            'hypotension'],
        relatedDiagnoses: [
            'aortic dissection',
            'aortic pseudoaneurysm']
    },
    perforation_of_peptic_ulcer: {
        id: '0023',
        displayName: 'perforation of peptic ulcer',
        clinical_features: [
            'severe pain',
            'diffuse pain',
            'abdominal pain'],
        relatedDiagnoses: [
            'acute mesenteric ischemia']
    },
    small_bowel_obstruction: {
        id: '0024',
        displayName: 'small bowel obstruction',
        clinical_features: [
            'abdominal distention',
            'vomiting',
            'crampy abdominal pain',
            'absence of flatus',
            'nausea',
            'vomiting',
            'periumbilical pain',
            'paroxysmal pain',
            'previous surgery'],
        relatedDiagnoses: [
            'ileus',
            'large bowel obstruction',
            'pseudo-obstruction']
    },
    volvulus: {
        id: '0025',
        displayName: 'volvulus',
        clinical_features: [
            'abdominal pain',
            'nausea',
            'vomiting',
            'obstipation',
            'colicky pain',
            'abdominal distension',
            'fever',
            'constipation'],
        relatedDiagnoses: [
            'toxic megacolon',
            'intestinal pseudo-obstruction']
    },
    splenic_rupture: {
        id: '0026',
        displayName: 'splenic rupture',
        clinical_features: [
            'left upper quadrant abdominal pain',
            'left chest wall pain',
            'left shoulder pain'],
        relatedDiagnoses: [
            'splenomegaly',
            'splenic infarction',
            'splenic rupture']
    },
    peptic_ulcer_disease: {
        id: '0027',
        displayName: 'peptic ulcer disease',
        clinical_features: [
            'epigastric pain',
            'indigestion',
            'upper abdominal pain',
            'upper abdominal discomfort',
            'pain radiating to back',
            'postprandial pain',
            'epigastric fullness',
            'early satiety',
            'postprandial belching',
            'early satiety',
            'nausea',
            'vomiting'],
        relatedDiagnoses: [
            'celiac disease',
            'gastric malignancy',
            'chronic pancreatitis',
            'biliary disease',
            'drug-induced dyspepsia']
    },
    splenic_abscess: {
        id: '0028',
        displayName: 'splenic abscess',
        clinical_features: [
            'fever',
            'tenderness in left upper quadrant'],
        relatedDiagnoses: [
            'splenomegaly',
            'splenic infarction',
            'splenic rupture']
    },
    acute_cholecystitis: {
        id: '0029',
        displayName: 'acute cholecystitis',
        clinical_features: [
            'abdominal pain',
            'pain radiating to right shoulder',
            'pain radiating to back',
            'severe pain',
            'constant pain',
            'nausea',
            'vomiting',
            'anorexia',
            'fatty food ingestion',
            'fever',
            'right upper quadrant pain'],
        relatedDiagnoses: [
            'acute pancreatitis',
            'appendicitis',
            'acute hepatitis',
            'peptic ulcer disease',
            'nonulcer dyspepsia',
            'irritable bowel disease',
            'functional gallbladder disorder',
            'sphincter of Oddi dysfunction',
            'perforated viscus']
    },
    pancreatitis: {
        id: '0030',
        displayName: 'pancreatitis',
        clinical_features: [
            'upper abdominal pain',
            'steady pain',
            'pain radiating to back',
            'nausea',
            'vomiting',
            'abdominal distention',
            'guarding',
            'alcoholism'],
        relatedDiagnoses: [
            'peptic ulcer disease',
            'cholangitis',
            'choledocholithiasis',
            'cholecystitis',
            'intestinal obstruction',
            'mesenteric ischemia',
            'hepatitis']
    },
    incarcerated_hernia: {
        id: '0031',
        displayName: 'incarcerated hernia',
        clinical_features: [
            'mild pain',
            'lower abdominal pain',
            'pain exacerbated by straining'],
        relatedDiagnoses: ['testicular torsion']
    },
    foodborne_disease: {
        id: '0032',
        displayName: 'foodborne disease',
        clinical_features: [
            'nausea',
            'vomiting',
            'fever',
            'abdominal pain',
            'diarrhea'],
        relatedDiagnoses: ['infectious gastroenteritis']
    },
    hepatitis_A: {
        id: '0033',
        displayName: 'hepatitis A',
        clinical_features: [
            'acute onset',
            'nausea',
            'vomiting',
            'anorexia',
            'fever',
            'malaise',
            'abdominal pain',
            'dark urine',
            'pale stools',
            'jaundice',
            'pruritus',
            'fever',
            'jaundice',
            'scleral icterus',
            'abdominal pain'],
        relatedDiagnoses: [
            'acute HIV infection',
            'Adenovirus',
            'Herpes simplex virus',
            'Yellow fever virus',
            'Epstein-barr vius']
    },
    diabetic_ketoacidosis: {
        id: '0034',
        displayName: 'diabetic ketoacidosis',
        clinical_features: [
            'polyuria',
            'polydipsia',
            'weight loss',
            'lethargy',
            'obtundation',
            'hyperventilation',
            'abdominal pain',
            'nausea',
            'vomiting',
            'dry oral mucosa',
            'decreased skin turgor',
            'dry axillae'],
        relatedDiagnoses: [
            'alcoholic ketoacidosis',
            'fasting ketoacidosis',
            'anion gap acidosis']
    },
    alcoholic_ketoacidosis: {
        id: '0035',
        displayName: 'alcoholic ketoacidosis',
        clinical_features: [
            'chronic alcohol abuse',
            'malnutrition',
            'recent episode of binge drinking',
            'nausea',
            'vomiting',
            'abdominal pain',
            'diffuse abdominal pain',
            'alert',
            'lucid'],
        relatedDiagnoses: [
            'fasting ketoacidosis',
            'anion gap acidosis',
            'diabetic ketoacidosis']
    }
}
