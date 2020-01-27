import React from 'react'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import queryString from 'query-string'

import 'normalize.css'

import Intro from './slides/Intro'
import Principles from './slides/Principles'
import Publics from './slides/Publics'
import MinorityUserMyth from './slides/MinorityUserMyth'
// import WaiAria from './slides/WaiAria'
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
// import ToolsForDevs from './slides/ToolsForDevs'
// import AccessibilityInDesign from './slides/AccessibilityInDesign'
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
// import UsePlaceholdersCorrectly from './slides/UsePlaceholdersCorrectly'
// import UseParallaxCorrectly from './slides/UseParallaxCorrectly'
import ComponentWithAccessibilityIssues from './slides/ComponentWithAccessibilityIssues'
// import ToolsForDesigners from './slides/ToolsForDesigners'
import Conclusion from './slides/Conclusion'
import References from './slides/References'
// import KeyboardNavigationWorkingByDefault from './slides/KeyboardNavigationWorkingByDefault'
import KeyboardNavigation from './slides/KeyboardNavigation'
// import AcessibilityHighlights from './slides/AcessibilityHighlights'
import ConsiderUserPreference from './components/ConsiderUserPreference'
import ToolsForEveryone from './slides/ToolsForEveryone'

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

const qs = queryString.parse(window.location.search)

window.isPocket = !!qs.pocket
window.isPresenter = window.location.hash.includes('?presenter')

const Presentation = () => {
  const { isPocket } = window

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
      {!isPocket && Publics()}
      {!isPocket && Principles()}
      {/* CHECKPOINT - DEV */}
      {/* {SemanticHtml()} */}
      {/* {WaiAria()} */}
      {CssHints()}
      {!isPocket && ConsiderUserPreference()}
      {AltTextGoodPractices()}
      {DontDisableZoom()}
      {SizeYourTouchAreas()}
      {!isPocket && SkipToContentLink()}
      {SmoothScroll()}
      {!isPocket && ImmediateFeedback()}
      {PredeterminatedActionTime()}
      {/* {ToolsForDevs()} */}
      {/* CHECKPOINT - DESIGN */}
      {!isPocket && KeyboardNavigation()}
      {/* {AccessibilityInDesign()} */}
      {FontSize()}
      {ContrastColor()}
      {!isPocket && ColorBlindness()}
      {!isPocket && LowScopeOfVision()}
      {Spellcheck()}
      {!isPocket && AvoidDistractions()}
      {!isPocket && ProvideSimpleVocabulary()}
      {!isPocket && AvoidOrtographicalErrors()}
      {!isPocket && GaiaProject()}
      {!isPocket && SelfExplainableLinkTexts()}
      {/* {UsePlaceholdersCorrectly()} */}
      {/* {UseParallaxCorrectly()} */}
      {ComponentWithAccessibilityIssues()}
      {!isPocket && KnowYourAudience()}
      {!isPocket && TestInRealTools()}
      {TestEverything()}
      {/* {AcessibilityHighlights()} */}
      {/* {ToolsForDesigners()} */}
      {ToolsForEveryone()}
      {Conclusion()}
      {References()}
    </Deck>
  )
}

export default Presentation
