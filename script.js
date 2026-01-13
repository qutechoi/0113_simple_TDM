// Translations
const translations = {
    en: {
        title: 'Vancomycin TDM Calculator',
        subtitle: 'Therapeutic Drug Monitoring & Dosage Recommendation',
        themeToggle: 'Dark',
        themeToggleBright: 'Bright',
        inputTitle: 'Patient & Dosing Information',
        patientDemo: 'Patient Demographics',
        age: 'Age (years)',
        agePlaceholder: 'e.g. 65',
        sex: 'Sex',
        male: 'Male',
        female: 'Female',
        height: 'Height (cm)',
        heightPlaceholder: 'e.g. 170',
        weight: 'Weight (kg)',
        weightPlaceholder: 'e.g. 70',
        scr: 'Serum Creatinine (mg/dL)',
        scrPlaceholder: 'e.g. 1.2',
        dosingRegimen: 'Current Dosing Regimen',
        dose: 'Dose (mg)',
        dosePlaceholder: 'e.g. 1000',
        interval: 'Interval (hours)',
        intervalPlaceholder: 'e.g. 12',
        startTime: 'First Dose Time',
        monitoring: 'Monitoring',
        sampleTime: 'Sampling Time',
        sampleTimeHint: 'Time when blood sample was drawn',
        measuredConc: 'Measured Concentration (mg/L)',
        measuredConcPlaceholder: 'e.g. 15.5',
        measuredConcHint: 'Lab result from blood sample',
        calculateBtn: 'Calculate & Analyze',
        resultsTitle: 'TDM Analysis Results',
        auc24: 'AUC (24h)',
        trough: 'Trough (Cmin)',
        clearance: 'Clearance (CL)',
        halflife: 'Half-life (T1/2)',
        hours: 'hours',
        waiting: 'Waiting...',
        concentrationCurve: 'Concentration-Time Curve',
        chartTime: 'Time (hours)',
        chartConcentration: 'Concentration (mg/L)',
        chartPeak: 'Peak',
        chartTrough: 'Trough',
        chartTargetRange: 'Target Range',
        clinicalInterpretation: 'Clinical Interpretation',
        effectivenessLabel: 'Effectiveness Prediction:',
        toxicityLabel: 'Toxicity Assessment:',
        recommendationTitle: 'Dosage Recommendation',
        recommendationPlaceholder: 'Please enter patient data and calculate to see recommendations.',
        fillAllFields: 'Please fill in all numeric fields.',
        aucLow: 'Low (<400)',
        aucTarget: 'Target (400-600)',
        aucHigh: 'High (>600)',
        troughLow: 'Low (<10)',
        troughAcceptable: 'Acceptable (10-20)',
        troughHigh: 'High (>20)',
        effectivenessLow: 'Risk of clinical failure. Drug exposure may be insufficient.',
        effectivenessGood: 'Predicted exposure is sufficient for therapeutic effect (AUC > 400).',
        toxicityHigh: 'Increased risk of nephrotoxicity. Monitoring recommended.',
        toxicityLow: 'Low risk of dose-dependent toxicity.',
        recAppropriate: 'Current dosing regimen is appropriate. Continue monitoring renal function and trough levels.',
        recIncrease: 'AUC is below target. Consider INCREASING total daily dose. \nOptions: Increase dose amount or shorten dosing interval (e.g., q12h -> q8h).',
        recDecrease: 'AUC is above target. Consider DECREASING total daily dose. \nOptions: Decrease dose amount or extend dosing interval (e.g., q12h -> q24h) to reduce toxicity risk.'
    },
    ko: {
        title: '반코마이신 TDM 계산기',
        subtitle: '치료적 약물 모니터링 & 용량 권장',
        themeToggle: '다크',
        themeToggleBright: '브라이트',
        inputTitle: '환자 & 투약 정보',
        patientDemo: '환자 인구통계',
        age: '나이 (세)',
        agePlaceholder: '예) 65',
        sex: '성별',
        male: '남성',
        female: '여성',
        height: '키 (cm)',
        heightPlaceholder: '예) 170',
        weight: '체중 (kg)',
        weightPlaceholder: '예) 70',
        scr: '혈청 크레아티닌 (mg/dL)',
        scrPlaceholder: '예) 1.2',
        dosingRegimen: '현재 투약 요법',
        dose: '용량 (mg)',
        dosePlaceholder: '예) 1000',
        interval: '투약 간격 (시간)',
        intervalPlaceholder: '예) 12',
        startTime: '첫 투약 시간',
        monitoring: '모니터링',
        sampleTime: '채혈 시간',
        sampleTimeHint: '혈액 샘플을 채취한 시간',
        measuredConc: '측정된 농도 (mg/L)',
        measuredConcPlaceholder: '예) 15.5',
        measuredConcHint: '혈액 검사 결과값',
        calculateBtn: '계산 & 분석',
        resultsTitle: 'TDM 분석 결과',
        auc24: 'AUC (24시간)',
        trough: '최저 농도 (Cmin)',
        clearance: '청소율 (CL)',
        halflife: '반감기 (T1/2)',
        hours: '시간',
        waiting: '대기 중...',
        concentrationCurve: '농도-시간 곡선',
        chartTime: '시간 (시간)',
        chartConcentration: '농도 (mg/L)',
        chartPeak: '최고 농도',
        chartTrough: '최저 농도',
        chartTargetRange: '목표 범위',
        clinicalInterpretation: '임상적 해석',
        effectivenessLabel: '효과 예측:',
        toxicityLabel: '독성 평가:',
        recommendationTitle: '용량 권장사항',
        recommendationPlaceholder: '환자 데이터를 입력하고 계산하여 권장사항을 확인하세요.',
        fillAllFields: '모든 숫자 필드를 입력해주세요.',
        aucLow: '낮음 (<400)',
        aucTarget: '목표 (400-600)',
        aucHigh: '높음 (>600)',
        troughLow: '낮음 (<10)',
        troughAcceptable: '적정 (10-20)',
        troughHigh: '높음 (>20)',
        effectivenessLow: '임상적 실패 위험. 약물 노출이 불충분할 수 있습니다.',
        effectivenessGood: '예측된 노출량은 치료 효과에 충분합니다 (AUC > 400).',
        toxicityHigh: '신독성 위험 증가. 모니터링을 권장합니다.',
        toxicityLow: '용량 의존적 독성의 낮은 위험.',
        recAppropriate: '현재 투약 요법이 적절합니다. 신기능과 최저 농도 모니터링을 계속하세요.',
        recIncrease: 'AUC가 목표보다 낮습니다. 총 일일 용량 증가를 고려하세요. \n옵션: 용량 증가 또는 투약 간격 단축 (예: 12시간마다 -> 8시간마다).',
        recDecrease: 'AUC가 목표보다 높습니다. 총 일일 용량 감소를 고려하세요. \n옵션: 용량 감소 또는 투약 간격 연장 (예: 12시간마다 -> 24시간마다) 하여 독성 위험을 줄이세요.'
    }
};

let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let pkChart = null; // Global chart variable

document.addEventListener('DOMContentLoaded', () => {
    // Get all DOM elements first
    const calculateBtn = document.getElementById('calculateBtn');

    // Inputs
    const ageInput = document.getElementById('age');
    const sexInput = document.getElementById('sex');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const scrInput = document.getElementById('scr');
    const doseInput = document.getElementById('dose');
    const intervalInput = document.getElementById('interval');
    const startTimeInput = document.getElementById('startTime');
    const sampleTimeInput = document.getElementById('sampleTime');
    const measuredConcInput = document.getElementById('measuredConc');

    // Outputs
    const aucValue = document.getElementById('aucValue');
    const aucStatus = document.getElementById('aucStatus');
    const troughValue = document.getElementById('troughValue');
    const troughStatus = document.getElementById('troughStatus');
    const clValue = document.getElementById('clValue');
    const halflifeValue = document.getElementById('halflifeValue');
    const effectivenessText = document.getElementById('effectivenessText');
    const toxicityText = document.getElementById('toxicityText');
    const recommendationText = document.getElementById('recommendationText');

    // Theme controls
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Language controls
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');

    // Function definitions
    function applyTheme() {
        const t = translations[currentLang];
        const themeToggleText = document.querySelector('#themeToggle span[data-i18n]');

        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            if (themeToggleText) {
                themeToggleText.textContent = t.themeToggleBright;
            }
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            if (themeToggleText) {
                themeToggleText.textContent = t.themeToggle;
            }
        }
    }

    function applyLanguage() {
        const t = translations[currentLang];

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-placeholder]').forEach(element => {
            const key = element.getAttribute('data-placeholder');
            if (t[key]) {
                element.placeholder = t[key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = currentLang;
    }

    function calculateTDM() {
        // 1. Get Values
        const age = parseFloat(ageInput.value);
        const sex = sexInput.value;
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const scr = parseFloat(scrInput.value);
        const dose = parseFloat(doseInput.value);
        const interval = parseFloat(intervalInput.value);
        const startTime = new Date(startTimeInput.value);
        const sampleTime = new Date(sampleTimeInput.value);
        const measuredConc = parseFloat(measuredConcInput.value);

        if (!age || !height || !weight || !scr || !dose || !interval || !measuredConc) {
            alert(translations[currentLang].fillAllFields);
            return;
        }

        if (!startTimeInput.value || !sampleTimeInput.value) {
            alert(translations[currentLang].fillAllFields);
            return;
        }

        // Calculate time elapsed since dose (in hours)
        const timeSinceDose = (sampleTime - startTime) / (1000 * 60 * 60);

        if (timeSinceDose < 0) {
            alert(currentLang === 'en' ? 'Sample time must be after dose time!' : '채혈 시간은 투약 시간 이후여야 합니다!');
            return;
        }

        // 2. Calculate Weights
        // IBW (Devine)
        let ibw;
        if (sex === 'male') {
            ibw = 50 + 0.9 * (height - 152);
        } else {
            ibw = 45.5 + 0.9 * (height - 152);
        }

        // Adjusted Body Weight
        const adjBw = ibw + 0.4 * (weight - ibw);

        // Weight for CrCl
        let weightForCrCl = weight;
        if (weight < ibw) {
            weightForCrCl = weight;
        } else if (weight > 1.2 * ibw) {
            weightForCrCl = adjBw;
        } else {
             // In between, typically use TBW, but some use IBW. Using TBW is safer for preventing underestimation of CL in good kidney function.
             weightForCrCl = weight;
        }

        // 3. Calculate CrCl (Cockcroft-Gault)
        let crcl = ((140 - age) * weightForCrCl) / (72 * scr);
        if (sex === 'female') {
            crcl *= 0.85;
        }

        // 4. Calculate Population PK Parameters (Matzke constants)
        // Initial Kel (Elimination Rate Constant)
        // Matzke et al: Kel = 0.00083 * CrCl + 0.0044
        const kelPop = 0.00083 * crcl + 0.0044;

        // Initial Vd (Volume of Distribution) - typical is 0.7 L/kg
        const vdPop = 0.7 * weight;

        // 5. Individualize PK Parameters using measured concentration
        // For single dose: C(t) = (Dose/Vd) * exp(-kel * t)
        // Solve for individualized Vd: Vd_ind = Dose / (C_measured * exp(kel * t))

        // First, determine which dose the sample is from
        const doseNumber = Math.floor(timeSinceDose / interval) + 1;
        const timeAfterLastDose = timeSinceDose % interval;

        // Calculate expected concentration at this time (population parameters)
        let cPredicted;
        if (doseNumber === 1) {
            // First dose - single dose equation
            cPredicted = (dose / vdPop) * Math.exp(-kelPop * timeAfterLastDose);
        } else {
            // Multiple doses - use steady state with correction
            const peakSS_pop = (dose / vdPop) * (1 / (1 - Math.exp(-kelPop * interval)));
            cPredicted = peakSS_pop * Math.exp(-kelPop * timeAfterLastDose);
        }

        // Adjust Vd based on measured vs predicted concentration ratio
        // If measured > predicted, Vd is smaller (drug is more concentrated)
        // If measured < predicted, Vd is larger (drug is more diluted)
        const vdIndividual = vdPop * (cPredicted / measuredConc);

        // For simplicity, we keep kel the same (alternative: also adjust kel)
        const kelIndividual = kelPop;

        // Recalculate with individualized parameters
        const cl = kelIndividual * vdIndividual;
        const tHalf = 0.693 / kelIndividual;

        // 6. Calculate Steady State Levels with individualized parameters
        const peakSS = (dose / vdIndividual) * (1 / (1 - Math.exp(-kelIndividual * interval)));
        const troughSS = peakSS * Math.exp(-kelIndividual * interval);

        // AUC 24h
        const totalDailyDose = (24 / interval) * dose;
        const auc24 = totalDailyDose / cl;

        // 6. Update UI
        // Metrics
        aucValue.textContent = auc24.toFixed(1);
        troughValue.textContent = troughSS.toFixed(1);
        clValue.textContent = cl.toFixed(2);
        halflifeValue.textContent = tHalf.toFixed(1);

        // Interpretation
        updateStatus(auc24, troughSS);

        // Update Chart
        updateChart(peakSS, troughSS, kelIndividual, interval, measuredConc, timeAfterLastDose);
    }

    function updateChart(peak, trough, kel, interval, measuredConc, measuredTime) {
        const t = translations[currentLang];
        const ctx = document.getElementById('pkChart');

        // Generate concentration-time data points
        const timePoints = [];
        const concentrations = [];
        const steps = 50; // Number of points to plot

        for (let i = 0; i <= steps; i++) {
            const time = (interval * i) / steps;
            const conc = peak * Math.exp(-kel * time);
            timePoints.push(time.toFixed(1));
            concentrations.push(conc);
        }

        // Destroy existing chart if it exists
        if (pkChart) {
            pkChart.destroy();
        }

        // Get current theme colors
        const isDark = currentTheme === 'dark';
        const textColor = isDark ? '#f1f5f9' : '#0f172a';
        const gridColor = isDark ? '#334155' : '#e2e8f0';

        // Prepare datasets
        const datasets = [{
            label: t.chartConcentration,
            data: concentrations,
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
        }, {
            label: t.chartPeak,
            data: new Array(timePoints.length).fill(peak),
            borderColor: '#10b981',
            borderDash: [5, 5],
            pointRadius: 0,
            borderWidth: 1.5
        }, {
            label: t.chartTrough,
            data: new Array(timePoints.length).fill(trough),
            borderColor: '#f59e0b',
            borderDash: [5, 5],
            pointRadius: 0,
            borderWidth: 1.5
        }];

        // Add measured concentration point
        if (measuredConc && measuredTime !== undefined) {
            const measuredDataset = {
                label: currentLang === 'en' ? 'Measured' : '측정값',
                data: timePoints.map((t, i) => {
                    return Math.abs(parseFloat(t) - measuredTime) < 0.5 ? measuredConc : null;
                }),
                borderColor: '#ef4444',
                backgroundColor: '#ef4444',
                pointRadius: 8,
                pointStyle: 'circle',
                showLine: false,
                borderWidth: 2
            };
            datasets.push(measuredDataset);
        }

        // Create new chart
        pkChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timePoints,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: textColor,
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 11
                            }
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y.toFixed(2) + ' mg/L';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: t.chartTime,
                            color: textColor,
                            font: {
                                size: 12,
                                weight: '500'
                            }
                        },
                        ticks: {
                            color: textColor,
                            maxTicksLimit: 8
                        },
                        grid: {
                            color: gridColor
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: t.chartConcentration,
                            color: textColor,
                            font: {
                                size: 12,
                                weight: '500'
                            }
                        },
                        ticks: {
                            color: textColor
                        },
                        grid: {
                            color: gridColor
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function updateStatus(auc, trough) {
        const t = translations[currentLang];

        // AUC Status
        let aucClass = '';
        let aucMsg = '';

        if (auc < 400) {
            aucClass = 'warning';
            aucMsg = t.aucLow;
        } else if (auc <= 600) {
            aucClass = 'success';
            aucMsg = t.aucTarget;
        } else {
            aucClass = 'danger';
            aucMsg = t.aucHigh;
        }

        aucStatus.className = `status-badge ${aucClass}`;
        aucStatus.textContent = aucMsg;

        // Trough Status (Target 10-20 generally, <10 low, >20 high)
        let troughClass = '';
        let troughMsg = '';
        if (trough < 10) {
            troughClass = 'warning';
            troughMsg = t.troughLow;
        } else if (trough <= 20) {
            troughClass = 'success';
            troughMsg = t.troughAcceptable;
        } else {
            troughClass = 'danger';
            troughMsg = t.troughHigh;
        }

        troughStatus.className = `status-badge ${troughClass}`;
        troughStatus.textContent = troughMsg;

        // Clinical Interpretation Text
        // Effectiveness
        if (auc < 400) {
            effectivenessText.textContent = t.effectivenessLow;
            effectivenessText.style.color = "#d97706"; // amber
        } else {
            effectivenessText.textContent = t.effectivenessGood;
            effectivenessText.style.color = "#059669"; // green
        }

        // Toxicity
        if (auc > 600 || trough > 20) {
            toxicityText.textContent = t.toxicityHigh;
            toxicityText.style.color = "#dc2626"; // red
        } else {
            toxicityText.textContent = t.toxicityLow;
            toxicityText.style.color = "#059669"; // green
        }

        // Recommendation
        generateRecommendation(auc, trough);
    }

    function generateRecommendation(auc, trough) {
        const t = translations[currentLang];
        let rec = "";

        if (auc >= 400 && auc <= 600) {
            rec = t.recAppropriate;
        } else {
            if (auc < 400) {
                rec = t.recIncrease;
            } else if (auc > 600) {
                rec = t.recDecrease;
            }
        }

        recommendationText.innerText = rec;
    }

    // Initialize theme and language
    applyTheme();
    applyLanguage();
    langText.textContent = currentLang === 'en' ? '한국어' : 'English';

    // Event listeners
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme();
        localStorage.setItem('theme', currentTheme);
        // Redraw chart with new theme colors
        if (pkChart) {
            const isDark = currentTheme === 'dark';
            const textColor = isDark ? '#f1f5f9' : '#0f172a';
            const gridColor = isDark ? '#334155' : '#e2e8f0';

            pkChart.options.plugins.legend.labels.color = textColor;
            pkChart.options.scales.x.title.color = textColor;
            pkChart.options.scales.x.ticks.color = textColor;
            pkChart.options.scales.x.grid.color = gridColor;
            pkChart.options.scales.y.title.color = textColor;
            pkChart.options.scales.y.ticks.color = textColor;
            pkChart.options.scales.y.grid.color = gridColor;
            pkChart.update();
        }
    });

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ko' : 'en';
        applyLanguage();
        applyTheme(); // Update theme button text after language change
        langText.textContent = currentLang === 'en' ? '한국어' : 'English';
        localStorage.setItem('language', currentLang);
        // Update chart labels
        if (pkChart) {
            const t = translations[currentLang];
            pkChart.data.datasets[0].label = t.chartConcentration;
            pkChart.data.datasets[1].label = t.chartPeak;
            pkChart.data.datasets[2].label = t.chartTrough;
            pkChart.options.scales.x.title.text = t.chartTime;
            pkChart.options.scales.y.title.text = t.chartConcentration;
            pkChart.update();
        }
    });

    calculateBtn.addEventListener('click', calculateTDM);
});
