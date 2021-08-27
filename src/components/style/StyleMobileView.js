import React from 'react'
import StyleAddButton from './StyleAddButton'
import StyleAvatarBlock from './StyleAvatarBlock'
import StyleBioTextBlock from './StyleBioTextBlock'
import StyleButtonBlock from './StyleButtonBlock'
import StyleHeadingBlock from './StyleHeadingBlock'
import StyleHeadlineBlock from './StyleHeadlineBlock'
import StyleIconsBlock from './StyleIconsBlock'
import StyleImageBlock from './StyleImageBlock'
import StyleLineDivider from './StyleLineDivider'
import './StyleMobileView.css'
import StyleVideoEmbed from './StyleVideoEmbed'

function StyleMobileView() {
    return (
        <div className='styleMobileView'>
            <div className="mobileview__outer">
                <div className="mobileview__outerSpeekercomp">
                    <div></div>
                </div>

                <div className="mobile__inner">
                    <StyleAddButton />
                    <StyleAvatarBlock />
                    <StyleBioTextBlock />
                    <StyleButtonBlock />
                    <StyleHeadingBlock />
                    <StyleHeadingBlock />
                    <StyleHeadlineBlock headlineType='h1' text='This is a H1 Headline'/>
                    <StyleHeadlineBlock headlineType='h3' text='This is a H3 Headline'/>
                    <StyleHeadlineBlock headlineType='h2' text='This is a H2 Headline'/>
                    <StyleIconsBlock />
                    <StyleImageBlock />
                    <StyleLineDivider />
                    <StyleVideoEmbed />
                </div>
            </div>
        </div>
    )
}

export default StyleMobileView
