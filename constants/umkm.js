export const businessTypeColumnChart = {
  series: [
    {
      data: [10, 3, 5, 1],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['FnB', 'Jasa', 'Perdagangan', 'Produksi'],
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
  },
};

export const businessByRTPieChart = {
  series: [1, 11, 4, 2],
  chartOptions: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['RT 41', 'RT 42', 'RT 43', 'RT 44'],
    legend: {
      position: 'bottom',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  },
};

export const HowLongBusinessHasExistedPolarChart = {
  series: [1, 2, 5, 4, 2, 5],
  chartOptions: {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
    labels: ['1-3', '4-6', '7-9', '10-14', '15-19', '20-25'],
    legend: {
      position: 'bottom',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  },
};

export const businessSourceOfCapitalPieChart = {
  series: [19],
  chartOptions: {
    chart: {
      type: 'donut',
    },
    legend: {
      position: 'bottom',
    },
    labels: ['Tabungan Pribadi', 'Mitra Kerjasama'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  },
};

export const businessThatUsingCommerceRadarChart = {
  series: [
    {
      name: 'Jumlah',
      data: [6, 9, 4],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: 'radar',
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 95,
        polygons: {
          strokeColors: '#e9e9e9',
          fill: {
            colors: ['#f8f8f8', '#fff'],
          },
        },
      },
    },
    colors: ['#FF4560'],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: '#FF4560',
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: ['Ya', 'Tidak', 'Mungkin'],
    },
  },
};

export const businessByIncomeColumnChart = {
  series: [
    {
      data: [10, 3, 5, 1],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        'Rp. 0 - Rp. 200.000',
        'Rp. 200.000 - Rp. 500.000',
        'Rp. 500.000 - Rp. 1.000.000',
        'Rp. 1.000.000 - Rp. 2.000.000',
        'Lebih dari Rp. 2.000.000',
      ],
    },
  },
};

export const businessHaveCommunityPieChart = {
  series: [17, 2],
  chartOptions: {
    chart: {
      width: '100%',
      type: 'pie',
    },
    labels: ['Ya', 'Tidak'],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + '%'];
      },
    },
    legend: {
      show: true,
      position: 'bottom',
    },
  },
};

export const UMKMNames = [
  "Jajan Pasar 'Fitri'",
  'Janny Salon dan Sembako',
  'Mie Ayam Sagan',
  'Roni Tailor',
  'Warung Makan Bu Sum',
  "Foto copy dan Alat Tulis 'Hidayah'",
  'Kuliner Warning (Warung Kuning)',
  'Warong Es',
  "Mie Ayam Bakso dan Es Buah Sagan 'Berkah Tunggal Rasa'",
  'Kelontong Etty',
  'Warung Ankas',
  "Klontong 'Yo Nyari'",
  'Warung Makan Toti',
  'Warung Hidayah',
  'Seafood Pak Bambang',
  'Warung Feri',
  'Angkringan Sagan',
  'Angkringan Mas Anen',
  'Warung Sangka Bulan',
];

export const UMKMCommunityNames = ['USEP KM TERBAN 1', 'USEP TERBAN 1'];

export const UMKMReasonsAboutCommerce = [
  'Biar lebih maju',
  'Supaya lebih maju',
  'Sudah mengikuti Shopee Grab dan Gojek',
  'Sudah tua',
  'Bisa menguntungkan',
  'Omzet Belum Banyak',
  'Sudah tua',
  'Agar tambah maju',
  'Sudah menggunakan',
];

export default {
  businessTypeColumnChart,
  businessByRTPieChart,
  HowLongBusinessHasExistedPolarChart,
  businessSourceOfCapitalPieChart,
  businessThatUsingCommerceRadarChart,
  businessByIncomeColumnChart,
  businessHaveCommunityPieChart,
  UMKMNames,
  UMKMCommunityNames,
  UMKMReasonsAboutCommerce,
};
