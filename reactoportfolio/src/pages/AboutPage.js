import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>

            
            <p>As you've figured, my name is Abdulkadir Aba. I was born in Somalia but my parents came here when I was just three years old back in '97. I grew up here in Seattle and I see it as my hometown. I have this deep connection for this city, and to best put it: You know how every superhero loves their city and have a sense of responsibility to protect it? 
                Well, I'm your friendly neighboorhood Abdul! </p>

            <p>I am also multi-lingual among which I can speak Somali, Arabic, and Hindi. Many of my peers say that I'm chill and approachable, to which I agree. Over the years I have grown to develop a keen interest in Software Engineering and the whole tech shabang in general. Technology is ever so evolving, and paving the way for the future, being able to contribute to that future is a blessing in and of itself.</p>

            <p>I have studied at University of Washington's Coding Bootcamp under the guide of excellent Instructors who are experts in the arts of code. I've learned many things that I did not know prior, and with those knowledge, and with the inspiraton of the motto of code, ABC, I will always be learning and gaining tons of new skill! Always Be Coding!</p>

            

            
            </Content>
        </div>
    );

}

export default AboutPage;