import React from 'react'
import MainLayout from './MainLayout'
import { HeroSection } from '@/components/elements/Hero'
import FeatureCarousel from '@/components/elements/Fetures'
import { FeaturesBlock } from '@/components/elements/FeatureBlock'

const page = () => {
  return (
   <MainLayout >
    <HeroSection />
    <FeaturesBlock />
    </MainLayout>
  )
}

export default page