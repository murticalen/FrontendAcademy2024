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

type Payload = ExchangeRate[]

export const fetchExchangeRates = async () => {
  const req = await fetch("https://api.hnb.hr/tecajn-eur/v3")
  const data = await req.json()

  return data as Payload
}
