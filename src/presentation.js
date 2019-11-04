import React from 'react'

import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import 'normalize.css'

import Intro from './slides/Intro'
import Principles from './slides/Principles'
import Publics from './slides/Publics'
import MinorityUserMyth from './slides/MinorityUserMyth'
import WaiAria from './slides/WaiAria'
import CssHints from './slides/CssHints'
import AltTextGoodPractices from './slides/AltTextGoodPractices'
import DontDisableZoom from './slides/DontDisableZoom'
import SizeYourTouchAreas from './slides/SizeYourTouchAreas'
import SkipToContentLink from './slides/SkipToContentLink'
import SmoothScroll from './slides/SmoothScroll'
import ImmediateFeedback from './slides/ImmediateFeedback'
import PredeterminatedActionTime from './slides/PredeterminatedActionTime'
import KnowYourAudience from './slides/KnowYourAudience'
import TestInRealTools from './slides/TestInRealTools'
import TestEverything from './slides/TestEverything'
import ToolsForDevs from './slides/ToolsForDevs'
import AccessibilityInDesign from './slides/AccessibilityInDesign'
import FontSize from './slides/FontSize'
import ContrastColor from './slides/ContrastColor'
import ColorBlindness from './slides/ColorBlindness'
import LowScopeOfVision from './slides/LowScopeOfVision'
import Spellcheck from './slides/Spellcheck'
import AvoidDistractions from './slides/AvoidDistractions'
import ProvideSimpleVocabulary from './slides/ProvideSimpleVocabulary'
import AvoidOrtographicalErrors from './slides/AvoidOrtographicalErrors'
import GaiaProject from './slides/GaiaProject'
import SelfExplainableLinkTexts from './slides/SelfExplainableLinkTexts'
import UsePlaceholdersCorrectly from './slides/UsePlaceholdersCorrectly'
import UseParallaxCorrectly from './slides/UseParallaxCorrectly'
import ComponentWithAccessibilityIssues from './slides/ComponentWithAccessibilityIssues'
import ToolsForDesigners from './slides/ToolsForDesigners'
import Conclusion from './slides/Conclusion'
import References from './slides/References'
// import KeyboardNavigationWorkingByDefault from './slides/KeyboardNavigationWorkingByDefault'
import KeyboardNavigation from './slides/KeyboardNavigation'
import AcessibilityHighlights from './slides/AcessibilityHighlights'

const theme = createTheme(
  {
    primary: '#1F2022', // 'white',
    secondary: 'white', // '#1F2022',
    tertiary: '#35BAFD', // '#03A9FC',
    quaternary: '#CECECE' // '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const Presentation = () => {
  return (
    <Deck
      transition={['fade']}
      transitionDuration={500}
      theme={theme}
      controls={false}
      showFullscreenControl={false}
      progress='bar'
    >
      {/* CHECKPOINT - INTRO */}
      {Intro()}
      {/* {AboutTheDojoApproach()} */}
      {MinorityUserMyth()}
      {Publics()}
      {Principles()}
      {/* CHECKPOINT - DEV */}
      {/* {SemanticHtml()} */}
      {WaiAria()}
      {CssHints()}
      {AltTextGoodPractices()}
      {DontDisableZoom()}
      {SizeYourTouchAreas()}
      {SkipToContentLink()}
      {SmoothScroll()}
      {ImmediateFeedback()}
      {PredeterminatedActionTime()}
      {KnowYourAudience()}
      {TestInRealTools()}
      {TestEverything()}
      {ToolsForDevs()}
      {/* CHECKPOINT - DESIGN */}
      {KeyboardNavigation()}
      {AccessibilityInDesign()}
      {FontSize()}
      {ContrastColor()}
      {ColorBlindness()}
      {LowScopeOfVision()}
      {Spellcheck()}
      {AvoidDistractions()}
      {ProvideSimpleVocabulary()}
      {AvoidOrtographicalErrors()}
      {GaiaProject()}
      {SelfExplainableLinkTexts()}
      {UsePlaceholdersCorrectly()}
      {UseParallaxCorrectly()}
      {ComponentWithAccessibilityIssues()}
      {AcessibilityHighlights()}
      {ToolsForDesigners()}
      {Conclusion()}
      {References()}
    </Deck>
  )
}

export default Presentation
