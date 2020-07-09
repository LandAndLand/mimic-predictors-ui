import { FeatureMap } from '../types';

// prettier-ignore
const featureMap: FeatureMap = {
    cbc: {
        label: 'CBC w/ Differential',
        features: [
            [7, 'rbcs'], [83, 'rbcs_min'], [119, 'rbcs_max'], [47, 'rbcs_std'],
            [8, 'wbcs'], [84, 'wbcs_min'], [120, 'wbcs_max'], [48, 'wbcs_std'],
            [28, 'platelets'], [101, 'platelets_min'], [137, 'platelets_max'], [65, 'platelets_std'],
            [24, 'hemoglobin'], [97, 'hemoglobin_min'], [133, 'hemoglobin_max'], [61, 'hemoglobin_std'],
            [23, 'hemocrit'], [96, 'hemocrit_min'], [132, 'hemocrit_max'], [60, 'hemocrit_std'],
            [10, 'atypical lymphocytes'], [86, 'atypical lymphocytes_min'], [122, 'atypical lymphocytes_max'], [50, 'atypical lymphocytes_std'],
            [11, 'bands'], [87, 'bands_min'], [123, 'bands_max'], [51, 'bands_std'], 
            [12, 'basophils'], [88, 'basophils_min'], [124, 'basophils_max'], [52, 'basophils_std'],
            [20, 'eosinophils'], [93, 'eosinophils_min'], [129, 'eosinophils_max'], [57, 'eosinophils_std'],
            [27, 'neutrophils'], [100, 'neutrophils_min'], [136, 'neutrophils_max'], [64, 'neutrophils_std'],
            [25, 'lymphocytes'], [98, 'lymphocytes_min'], [134, 'lymphocytes_max'], [62, 'lymphocytes_std'],
            [26, 'monocytes'], [99, 'monocytes_min'], [135, 'monocytes_max'], [63, 'monocytes_std'],
            [29, 'polymorphonuclear leukocytes'], [102, 'polymorphonuclear leukocytes_min'], [138, 'polymorphonuclear leukocytes_max'], [66, 'polymorphonuclear leukocytes_std']
        ]
    },
    vitals: {
        label: 'Vitals',
        features: [
            [35, 'temperature (f)'], [108, 'temperature (f)_min'], [144, 'temperature (f)_max'], [72, 'temperature (f)_std'],
            [22, 'heart rate'], [95, 'heart rate_min'], [131, 'heart rate_max'], [59, 'heart rate_std'],
            [32, 'respiratory rate'], [105, 'respiratory rate_min'], [141, 'respiratory rate_max'], [69, 'respiratory rate_std'],
            [34, 'systolic'], [107, 'systolic_min'], [143, 'systolic_max'], [71, 'systolic_std'],
            [19, 'diastolic'], [92, 'diastolic_min'], [128, 'diastolic_max'], [56, 'diastolic_std'],
            [31, 'pulse oximetry'], [104, 'pulse oximetry_min'], [140, 'pulse oximetry_max'], [68, 'pulse oximetry_std'],
            [39, 'troponin'], [111, 'troponin_min'], [147, 'troponin_max'], [75, 'troponin_std'],
        ]
    },
    labs: {
        label: 'Labs',
        features: [
            [1, 'hdl'], [77, 'hdl_min'], [113, 'hdl_max'], [41, 'hdl_std'],
            [4, 'ldl'], [80, 'ldl_min'], [116, 'ldl_max'], [44, 'ldl_std'],
            [0, 'bun'], [76, 'bun_min'], [112, 'bun_max'], [40, 'bun_std'],
            [2, 'inr'], [78, 'inr_min'], [114, 'inr_max'], [42, 'inr_std'],
            [6, 'ptt'], [82, 'ptt_min'], [118, 'ptt_max'], [46, 'ptt_std'],
            [38, 'triglycerides'], [110, 'triglycerides_min'], [146, 'triglycerides_max'], [74, 'triglycerides_std'],
            [16, 'creatinine'], [91, 'creatinine_min'], [127, 'creatinine_max'], [55, 'creatinine_std'],
            [21, 'glucose'], [94, 'glucose_min'], [130, 'glucose_max'], [58, 'glucose_std'],
            [33, 'sodium'], [106, 'sodium_min'], [142, 'sodium_max'], [70, 'sodium_std'],
            [30, 'potassium_x'], [103, 'potassium_min'], [139, 'potassium_max'], [67, 'potassium_std'],
            [15, 'chloride'], [90, 'chloride_min'], [126, 'chloride_max'], [54, 'chloride_std'],
            [13, 'blood culture'],
            [3, 'inspired o2 fraction'], [79, 'inspired o2 fraction_min'], [115, 'inspired o2 fraction_max'], [43, 'inspired o2 fraction_std'],
            [14, 'central venous pressure'], [89, 'central venous pressure_min'], [125, 'central venous pressure_max'], [53, 'central venous pressure_std'],
            [5, 'peep set'], [81, 'peep set_min'], [117, 'peep set_max'], [45, 'peep set_std'],
            [36, 'tidal volume'], [109, 'tidal volume_min'], [145, 'tidal volume_max'], [73, 'tidal volume_std'],
            [9, 'anion gap'], [85, 'anion gap_min'], [121, 'anion gap_max'], [49, 'anion gap_std']
        ]
    },
    demo: {
        label: 'Demographic',
        features: [
            [149, 'age'],
            [150, 'm'],
            [148, 'black'],
            [17, 'daily weight'],
            [37, 'tobacco'],
            [18, 'diabetes']
        ]
    },
    meds: {
        label: 'Medications',
        features: [
            [175, 'epoetin'],
            [223, 'warfarin'],
            [183, 'heparin'],
            [174, 'enoxaparin'],
            [179, 'fondaparinux'],
            [158, 'asprin'],
            [153, 'acetominophen'],
            [187, 'insulin'],
            [181, 'glucagon'],
            [214, 'potassium_y'],
            [161, 'calcium gluconate'],
            [176, 'fentanyl'],
            [194, 'magensium sulfate'],
            [169, 'dextrose'],
            [217, 'ranitidine'],
            [205, 'ondansetron'],
            [208, 'pantoprazole'],
            [196, 'metoclopramide'],
            [193, 'lisinopril'],
            [162, 'captopril'],
            [218, 'statin'],
            [184, 'hydralazine'],
            [172, 'diltiazem'],
            [163, 'carvedilol'],
            [197, 'metoprolol'],
            [189, 'labetalol'],
            [159, 'atenolol'],
            [155, 'amiodarone'],
            [171, 'digoxin(?!.*fab)'],
            [168, 'clopidogrel'],
            [203, 'nitroprusside'],
            [202, 'nitroglycerin'],
            [222, 'vasopressin'],
            [185, 'hydrochlorothiazide'],
            [180, 'furosemide'],
            [160, 'atropine'],
            [201, 'neostigmine'],
            [192, 'levothyroxine'],
            [207, 'oxycodone'],
            [186, 'hydromorphone'],
            [177, 'fentanyl citrate'],
            [219, 'tacrolimus'],
            [215, 'prednisone'],
            [210, 'phenylephrine'],
            [204, 'norepinephrine'],
            [182, 'haloperidol'],
            [211, 'phenytoin'],
            [220, 'trazodone'],
            [190, 'levetiracetam'],
            [170, 'diazepam'],
            [167, 'clonazepam'],
            [216, 'propofol'],
            [224, 'zolpidem'],
            [199, 'midazolam'],
            [154, 'albuterol'],
            [188, 'ipratropium'],
            [173, 'diphenhydramine'],
            [151, '0.9% sodium chloride'],
            [212, 'phytonadione'],
            [198, 'metronidazole'],
            [164, 'cefazolin'],
            [165, 'cefepime'],
            [221, 'vancomycin'],
            [191, 'levofloxacin'],
            [178, 'fluconazole'],
            [195, 'meropenem'],
            [166, 'ceftriaxone'],
            [213, 'piperacillin'],
            [157, 'ampicillin-sulbactam'],
            [200, 'nafcillin'],
            [206, 'oxacillin'],
            [156, 'amoxicillin'],
            [209, 'penicillin'],
            [152, 'smx-tmp']
        ]
    }
};

export default featureMap;
