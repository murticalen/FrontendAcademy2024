import { Weather as WeatherApp } from '@/modules/Weather/Weather'
import { styled } from '@kuma-ui/core'
import { GetServerSideProps } from 'next'

const H1 = styled.h1`
    color: t("colors.primary");
`

const Main = styled.main`
    max-width: 650px;
    margin: 0 auto;
    background: t("colors.surface.s0");
    min-height: 100vh;
`

export default function Weather() {
  return (
    <Main>
      <WeatherApp />
    </Main>
  )
}

// NOTE: THIS MAKES THE PAGE SERVER-SIDE RENDERED DESPITE BEING STATIC IN CONTENT
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}
