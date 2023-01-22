<template>
  <v-container fluid>
    <v-lazy>
      <v-container>
        <v-row class="mb-16">
          <v-col cols="12" md="6">
            <h1 class="display-1 font-weight-bold mb-3">UMKM</h1>
            <p class="subtitle-1">
              UMKM adalah singkatan dari Usaha Mikro, Kecil, dan Menengah.
              Bisnis ini dianggap sebagai tulang punggung ekonomi Indonesia,
              karena mayoritas bisnis ini mempekerjakan besar sebagian dari
              populasi. UMKM didefinisikan berdasarkan kriteria seperti jumlah
              pegawai dan pendapatan tahunan.
            </p>
            <p class="subtitle-1">
              Di Kampung Sagan sendiri UMKM juga menjadi tulang punggung
              perekonomian daerah. Wilayah ini terkenal dengan kerajinan
              tradisional dan kerajinan tangan, seperti warung makan, toko
              kelontong, restoran, dan jajanan pasar. Pemerintah daerah juga
              telah melaksanakan program-program untuk mendukung pertumbuhan
              UMKM di daerah, seperti memberikan akses kredit dan pelatihan.
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="/assets/umkm.jpeg"
              class="rounded-lg"
              max-width="100%"
              max-height="100%"
            />
          </v-col>
        </v-row>
        <v-row class="mb-16">
          <v-col cols="12" md="3">
            <v-card outlined>
              <v-card-text>
                <v-row align="center" justify="space-between">
                  <v-col cols="8">
                    <p class="body-2 mb-2 font-weight-bold">Total RT</p>
                    <p class="text-h6 text-lg-h4 mb-0 font-weight-bold">
                      4
                      <span class="caption"> RT </span>
                    </p>
                  </v-col>
                  <v-col cols="4">
                    <v-card color="black darken-4" class="text-center" dark>
                      <v-card-text class="pa-2 pa-lg-4">
                        <v-icon color="white"> mdi-home-group </v-icon>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card outlined>
              <v-card-text>
                <v-row align="center" justify="space-between">
                  <v-col cols="8">
                    <p class="body-2 mb-2 font-weight-bold">Total UMKM</p>
                    <p class="text-h6 text-lg-h4 mb-0 font-weight-bold">
                      20
                      <span class="caption"> UMKM </span>
                    </p>
                  </v-col>
                  <v-col cols="4">
                    <v-card color="black darken-4" class="text-center" dark>
                      <v-card-text class="pa-2 pa-lg-4">
                        <v-icon color="white"> mdi-store </v-icon>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card outlined>
              <v-card-text>
                <v-row align="center" justify="space-between">
                  <v-col cols="8">
                    <p class="body-2 mb-2 font-weight-bold">Total Bidang</p>
                    <p class="text-h6 text-lg-h4 mb-0 font-weight-bold">
                      3
                      <span class="caption"> Bidang Usaha </span>
                    </p>
                  </v-col>
                  <v-col cols="4">
                    <v-card color="black darken-4" class="text-center" dark>
                      <v-card-text class="pa-2 pa-lg-4">
                        <v-icon color="white"> mdi-note-check </v-icon>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card outlined>
              <v-card-text>
                <v-row align="center" justify="space-between">
                  <v-col cols="8">
                    <p class="body-2 mb-2 font-weight-bold">Total Paguyuban</p>
                    <p class="text-h6 text-lg-h4 mb-0 font-weight-bold">
                      2
                      <span class="caption"> Paguyuban </span>
                    </p>
                  </v-col>
                  <v-col cols="4">
                    <v-card color="black darken-4" class="text-center" dark>
                      <v-card-text class="pa-2 pa-lg-4">
                        <v-icon color="white"> mdi-account-group </v-icon>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mb-16">
          <v-col cols="12" md="8">
            <div class="mb-4">
              <div
                class="body-1 font-weight-bold text--secondary text-center text-md-left"
              >
                Persentase Bidang Usaha
              </div>
              <v-divider />
            </div>
            <ApexChart
              type="bar"
              height="100%"
              :options="UMKM_DATA.businessTypeColumnChart.chartOptions"
              :series="UMKM_DATA.businessTypeColumnChart.series"
            />
          </v-col>
          <v-col cols="12" md="4">
            <div class="mb-4">
              <div
                class="body-1 font-weight-bold text--secondary text-center text-md-left"
              >
                Persentase berdasarkan RT
              </div>
              <v-divider />
            </div>
            <ApexChart
              type="pie"
              width="100%"
              :options="UMKM_DATA.businessByRTPieChart.chartOptions"
              :series="UMKM_DATA.businessByRTPieChart.series"
            />
          </v-col>
        </v-row>
        <v-row class="mb-16">
          <v-col cols="12" md="4">
            <div class="mb-4">
              <div
                class="body-1 font-weight-bold text--secondary text-center text-md-left"
              >
                Lama usaha berjalan (dalam tahun)
              </div>
              <v-divider />
            </div>
            <ApexChart
              type="polarArea"
              width="100%"
              :options="
                UMKM_DATA.HowLongBusinessHasExistedPolarChart.chartOptions
              "
              :series="UMKM_DATA.HowLongBusinessHasExistedPolarChart.series"
            />
          </v-col>
          <v-col cols="12" md="4">
            <div class="mb-4">
              <div
                class="body-1 font-weight-bold text--secondary text-center text-md-left"
              >
                Persentase berdasarkan Modal Usaha
              </div>
              <v-divider />
            </div>
            <ApexChart
              type="donut"
              width="100%"
              :options="UMKM_DATA.businessSourceOfCapitalPieChart.chartOptions"
              :series="UMKM_DATA.businessSourceOfCapitalPieChart.series"
            />
          </v-col>
          <v-col cols="12" md="4">
            <div class="mb-4">
              <div
                class="body-1 font-weight-bold text--secondary text-center text-md-left"
              >
                Persentase Minat e-commerce
              </div>
              <v-divider />
            </div>
            <ApexChart
              type="radar"
              width="100%"
              :options="
                UMKM_DATA.businessThatUsingCommerceRadarChart.chartOptions
              "
              :series="UMKM_DATA.businessThatUsingCommerceRadarChart.series"
            />
          </v-col>
        </v-row>
        <v-row class="mb-16">
          <v-col cols="12" md="8">
            <div class="mb-4">
              <div
                class="body-1 font-weight-bold text--secondary text-center text-md-left"
              >
                Pemasukan Rata-rata
              </div>
              <v-divider />
            </div>
            <ApexChart
              type="bar"
              height="100%"
              :options="UMKM_DATA.businessByIncomeColumnChart.chartOptions"
              :series="UMKM_DATA.businessByIncomeColumnChart.series"
            />
          </v-col>
          <v-col cols="12" md="4">
            <div class="mb-4">
              <div
                class="body-1 font-weight-bold text--secondary text-center text-md-left"
              >
                Memiliki Paguyuban
              </div>
              <v-divider />
            </div>
            <ApexChart
              type="pie"
              width="100%"
              :options="UMKM_DATA.businessHaveCommunityPieChart.chartOptions"
              :series="UMKM_DATA.businessHaveCommunityPieChart.series"
            />
          </v-col>
        </v-row>
        <v-row class="mb-16">
          <v-col cols="12" md="4">
            <v-card outlined>
              <v-card-title class="body-1"> Daftar UMKM </v-card-title>
              <v-card-text class="pt-4">
                <v-timeline align-top dense>
                  <v-timeline-item
                    v-for="(UMKMName, iData) in UMKM_DATA.UMKMNames"
                    :key="`data-${iData}`"
                    color="primary"
                    small
                  >
                    <v-row dense>
                      <v-col cols="12" class="d-flex align-center">
                        <div class="d-flex flex-column">
                          <span>
                            {{ UMKMName }}
                          </span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card outlined>
              <v-card-title class="body-1"> Paguyuban UMKM </v-card-title>
              <v-card-text class="pt-4">
                <v-timeline align-top dense>
                  <v-timeline-item
                    v-for="(
                      UMKMCommunityName, iData
                    ) in UMKM_DATA.UMKMCommunityNames"
                    :key="`data-${iData}`"
                    color="primary"
                    small
                  >
                    <v-row dense>
                      <v-col cols="12" class="d-flex align-center">
                        <div class="d-flex flex-column">
                          <span>
                            {{ UMKMCommunityName }}
                          </span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card outlined>
              <v-card-title class="body-1">
                Respon UMKM terhadap e-commerce
              </v-card-title>
              <v-card-text class="pt-4">
                <v-timeline align-top dense>
                  <v-timeline-item
                    v-for="(
                      UMKMReasonAboutCommerce, iData
                    ) in UMKM_DATA.UMKMReasonsAboutCommerce"
                    :key="`data-${iData}`"
                    color="primary"
                    small
                  >
                    <v-row dense>
                      <v-col cols="12" class="d-flex align-center">
                        <div class="d-flex flex-column">
                          <span>
                            {{ UMKMReasonAboutCommerce }}
                          </span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-lazy>
  </v-container>
</template>

<script>
import UMKM_DATA from '~/constants/umkm.js';

export default {
  layout: 'content',
  data() {
    return {
      UMKM_DATA,
    };
  },
};
</script>
