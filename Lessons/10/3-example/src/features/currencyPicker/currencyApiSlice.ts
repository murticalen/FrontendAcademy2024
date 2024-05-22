import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface ExchangeRate {
  broj_tecajnice: string
  datum_primjene: string
  drzava: string
  drzava_iso: string
  kupovni_tecaj: string
  prodajni_tecaj: string
  sifra_valute: string
  srednji_tecaj: string
  valuta: string
}

export type HnbApiResponse = ExchangeRate[]

export const supportedCurrencies = [
  "AUD",
  "CAD",
  "CZK",
  "DKK",
  "HUF",
  "JPY",
  "NOK",
  "SEK",
  "CHF",
  "GBP",
] as const

export type Currency = (typeof supportedCurrencies)[number]

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.hnb.hr/tecajn-eur/v3" }),
  reducerPath: "atmApiSlice",
  tagTypes: ["exchangeRates"],
  endpoints: build => ({
    getExchangeRates: build.query<HnbApiResponse, Currency>({
      query: (currency = "EUR") => `?valuta=${currency}`,
      providesTags: (result, error, id) => [{ type: "exchangeRates", id }],
    }),
  }),
})

export const { useGetExchangeRatesQuery } = apiSlice
