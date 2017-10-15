'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.05d105e0-85d6-4119-9826-eac76f5e68ae';

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
              'On January 3, 1949, Margaret Chase Smith (R-Maine) starts her tenure in the Senate, where she stays in office until 1973, became the first woman to serve in both the House and Senate as she previously served in the House (1940-49)',
              'On January 5, 1925, Nellie Tayloe Ross is inaugurated as the first woman Governor in U.S. history (Governor of Wyoming)',
              'On January 7, 1896, Fanny Farmer’s first cookbook is published in which she standardized cooking measurements',
              'On January 7, 1955, Marian Anderson is the first African American woman to sing at the Metropolitan Opera',
              'On January 8, 1977, Pauli Murray is ordained as the first female African American Episcopal priest',
              'On January 11, 1935, Amelia Earhart makes the first solo flight from Hawaii to North America',
              'On January 12, 1932, Hattie Wyatt Caraway (D-Arkansas) is the first woman elected to the U.S. Senate, becomes the first woman to chair a Senate Committee and the first to serve as the Senate’s presiding officer',
              'On January 25, 1980, Mary Decker became the first woman to run a mile under 4 1/2 minutes, running it at 4:17.55',
              'On January 29, 1926, Violette Neatly Anderson is the first black woman to practice law before the U.S. Supreme Court',
              'On April 2, 1931, 17-year-old Jackie Mitchell, the second woman to play baseball in the all-male minor leagues, pitches an exhibition game against the N.Y. Yankees and strikes out both Babe Ruth and Lou Gehrig. The next day, the Baseball Commissioner voided her contract, claiming baseball was too strenuous for women. The ban was not overturned until 1992',
              'On April 5, 1911, 100,000 to 500,000 people march in New York City to attend the funeral of seven unidentified victims of the Triangle Shirtwaist Company fire in late March',
              'On April 7, 1805, Sacagawea begins helping the Lewis and Clark Expedition as an interpreter',
              'On April 7, 1987, Opening of the National Museum of Women in the Arts in Washington, D.C., the first museum devoted to women artists',
              'On April 9, 1939, Marian Anderson sings an Easter Sunday concert for more than 75,000 at Lincoln Memorial',
              'On April 13, 1933, Ruth Bryan Owen is the first woman to represent the U.S. as a foreign minister when she is appointed as envoy to Denmark',
              'On April 19, 1977, Fifteen women in the House of Representatives form the Congressional Caucus for Women’s Issues',
              'On April 22, Earth Day, honor Rachel Carson today, a woman who changed America and greatly influenced the environmental movement with her revolutionary book, Silent Spring.',
              'On April 26, 1777, American Revolution heroine Sybil Ludington, 16 years old, rides 40 miles on horseback in the middle of the night to warn the American militia that the British were invading',
              'On April 28, 1993, First “Take Our Daughters to Work” Day, sponsored by the Ms. Foundation, in 2003 it became “Take Our Daughters and Sons to Work” Day',
              'On May 1, 1950, Gwendolyn Brooks becomes the first African-American woman to receive the Pulitzer Prize for Poetry, named Library of Congress’s Consultant in Poetry (later called Poet Laureate) in 1985',
              'On May 5, 1938, Dr. Dorothy H. Andersen presents results of her medical research identifying the disease cystic fibrosis at a meeting of the American Pediatric Association',
              'On May 8, 1914, President Woodrow Wilson signs a Proclamation designating the second Sunday in May as Mother’s Day',
              'On May 10, 1872, Victoria Woodhull is nominated as the first woman candidate for U.S. president for the Equal Rights Party',
              'On May 12, 1968, A 12-block Mother’s Day march of “welfare mothers” is held in Washington, D.C., led by Coretta Scott King accompanied by Ethel Kennedy',
              'On May 21, 1932, Amelia Earhart Putnam becomes the first woman to complete a solo-transatlantic flight by flying 2,026 miles from Newfoundland toIreland in just under 15 hours',
              'On May 21, 1973, Lynn Genesko, a swimmer, receives the first athletic scholarship awarded to a woman (University of Miami)',
              'On May 29, 1977, Janet Guthrie becomes the first woman to qualify for and complete the Indy 500 car race',
              'On May 29, 1943, “Rosie the Riveter” by Norman Rockwell appears on the cover of the Saturday Evening Post',
              'On June 1, 1993, June 1, 1993 Connie Chung becomes the second woman to co-anchor the evening news, 17 years after Barbara Walters became the first in 1976',
              'On June 9, 1949, June 9, 1949 Georgia Neese Clark confirmed as the first woman treasurer of the United States',
              'On June 10, 1963, June 10, 1963 Equal Pay Act enacted: “To prohibit discrimination on account of sex in the payment of wages by employers engaged in commerce or in the production of goods for commerce.” (PL 88-38) ',
              'On June 11, 1913, June 11, 1913 Women in Illinois celebrate passage of a state woman suffrage bill allowing women to vote in presidential elections',
              'On June 17, 1873, June 17, 1873 Susan B. Anthony’s trial starts for illegally voting in Rochester, New York, on November 5, 1872',
              'On June 20, 1921, June 20, 1921 Alice Robertson (R-Oklahoma) becomes the first woman to chair the House of Representatives',
              'On June 21, 1997, June 21, 1997 The Women’s National Basketball Association (WNBA) plays its first game',
              'On June 23, 1972, June 23, 1972 Title IX of the Education Amendments of 1972 is signed by President Nixon, one of the most important legislation initiatives passed for women and girls since women won the vote in 1920. This legislation guarantees equal access and equal opportunity for female and male students in almost all aspects of our educational systems',
              'On June 25, 1903, June 25, 1903 Marie Curie defends her doctoral thesis on radioactive substances at Université de la Sorbonne in Paris, becoming the first woman in France to receive a doctoral degree',
              'On July 2, 1979, The Susan B. Anthony dollar is released  ',
              'On July 2, 1937, Amelia Earhart’s plane is lost in the Pacific Ocean near Howland Island  ',
              'On July 2, 1964, President Lyndon Johnson signs the Civil Rights Act; Title VII prohibits sex discrimination in employment   ',
              'On July 4, 1876, Suffragists crash the Centennial Celebration in Independence Hall to present the Vice President with the “Declaration of the Rights of Women” written by Matilda Joselyn Gage ',
              'On July 6, 1957, Althea Gibson is the first African American woman player to win a Wimbledon title in women’s tennis singles  ',
              'On July 7, 1981, President Reagan nominates Sandra Day O’Connor as the first woman Supreme Court Justice?',
              'On July 12, 1984, Representative Geraldine Ferraro (D-New York) is chosen as the first female to run for Vice President of the United States on the Democratic Party ticket with Walter Mondale (D-Minnesota)  ',
              'On July 14, 1917, 16 women from the National Women’s Party were arrested while picketing the White House demanding universal women’s suffrage; they were charged with obstructing traffic  ',
              'On July 19-20, 1848, The Seneca Falls Convention, the country’s first women’s rights convention, is held in Seneca Falls, New York Women’s Rights Movement ',
              'On July 20, 1942, The first class of Women’s Auxiliary Army Corps (WAAC) begins at Fort Des Moines, IA ',
              'On July 29, 1974.“, July 29, 1974. “Philadelphia Eleven” deacons (Merrill Bittner, Alla Bozarth-Campbell, Alison Cheek, Emily Hewitt, Carter Heyward, Suzanne Hiatt, Marie Moorefield, Jeannette Piccard, Betty Schiess, Katrina Swanson, and Nancy Wittig) ordained as the first women Episcopal priests',
              'On August 6, 1965 ,  The Voting Rights Act outlaws the discriminatory literacy tests that had been used to prevent African Americans from voting. Suffrage is finally fully extended to African American women',
              'On August 8, 1969, August 8, 1969 Executive order 11478 issued by President Nixon requires each federal department and agency to establish and maintain an affirmative action program of equal employment opportunity for civilian employees and applicants',
              'On August 9, 1995, August 9, 1995 Roberta Cooper Ramo becomes the first woman to hold the office of president of the American Bar Association',
              'On August 10, 1993, August 10, 1993 Ruth Bader Ginsburg is sworn in as the second woman and 107th Justice to serve on the US Supreme Court',
              'On August 12, 1972, August 12, 1972 Wendy Rue founds the National Association for Female Executives (NAFE), the largest businesswomen’s organization in the United States',
              'On August 14, 1986, August 14, 1986 Rear Admiral Grace Murray Hopper retires from active duty in the US Navy. A pioneering computer scientist and inventor of the computer language COBOL, she was the oldest officer still on active duty at the time of her retirement',
              'On August 23, 1902, August 23, 1902 Fanny Farmer opens the “School of Cookery” in Boston, MA',
              'On August 26, 1920The 19th Amendment of theUSConstitution is ratified granting women the right to vote, August 26, 1920 The 19th Amendment of the US Constitution is ratified granting women the right to vote',
              'On August 26, 1970, August 26, 1970 Betty Friedan leads a nationwide protest called the “Women’s Strike for Equality” in New York City on the fiftieth anniversary of women’s suffrage',
              'On August 26, 1971, August 26, 1971 The first Women’s Equality Day, initiated by Representative Bella Abzug, is established by Presidential Proclamation and reaffirmed annually',
              'On August 28, 1963, August 28, 1963 More than 250,000 gather for a march on Washington, DC, and listen to Martin Luther King, Jr.’s famous “I Have a Dream” speech',
              'On August 30, 1984, August 30, 1984 Judith A. Resnick is the second U.S. woman in space, traveling on the first flight of the space shuttle Discovery',
              'On September 12, 1910, Alice Stebbins Wells, a former social worker, becomes the first woman police officer with arrest powers in the U.S. (Los Angeles, CA)',
              'On September 14, 1964, Helen Keller receives the Presidential Medal of Freedom along with 4 other women: Dr. Lena Edwards, Lynn Fontainne, Dr. Helen Taussig, and Leontyne Price  ',
              'On September 14, 1975, Elizabeth Ann Seton is canonized and becomes the first American-born saint, founded the first U.S. Order of the Sisters of Charity of St. Joseph  ',
              'On September 20, 1973, Billie Jean King defeats Bobby “No-Broad-Can-Beat-Me” Riggs in the battle of the sexes tennis match    ',
              'On September 25, 1981,  Sandra Day O’Connor is sworn in as the first woman U.S. Supreme Court Justice  ',
              'On September 26, 1971,  Rep. Shirley Chisholm (D-New York) announces she will enter the Democratic presidential primaries  ',
              'On September 26, 1973, Capt. Lorraine Potter, an American Baptist minister, becomes the first woman U.S. Air Force chaplain  ',
              'On September 29, 1988,  Stacy Allison becomes first American woman to reach the summit of Mt. Everest  ',
              'On October 3, 1904, Mary McLeod Bethune opens her first school for African-American students in Daytona Beach, Florida  ',
              'On October 4, 1976 ,  Barbara Walters becomes the first woman co-anchor of the evening news (at ABC)  ',
              'On October 4, 1993, Ruth Bader Ginsburg joins the U.S. Supreme Court as its second woman Justice ',
              'On October 8, 1993 ,  Toni Morrison becomes the first African American woman to win the Nobel Prize for Literature  ',
              'On October 10, 1983, Dr. Barbara McClintock receives the Nobel Prize for Medicine for her discovery in genetics about mobile genetic elements  ',
              'On October 11, 1984, Dr. Kathryn D. Sullivan is the first U.S. woman astronaut to “walk” in space during Challenger flight  ',
              'On October 15, 1948, Dr. Frances L. Willoughby is the first woman doctor in the regular U.S. Navy  ',
              'On October 16, 1916, Margaret Sanger opens the U.S.’s first birth control clinic in Brooklyn, New York  ',
              'On October 23, 1910, Blanche Stuart Scott is the first American woman pilot to make a public flight  ',
              'On October 24, 1956 ,  Reverend Margaret Towner is the first woman ordained a minister in the Presbyterian Church  ',
              'On October 28, 1958, Mary Roebling is the first woman director of a stock exchange (American Stock Exchange)   ',
              'On November 1, 1848 , First medical school for women, the New England Female Medical School, opens, in 1874 it merges with Boston University to become one of the world’s first co-ed medical schools',
              'On November 8, 1910 , The state of Washington passes a constitutional amendment to guarantee woman suffrage',
              'On November 8, 1984, Dr. Anna L. Fisher, a physician on the shuttle Discovery, becomes the first American mother and third American woman to fly into space',
              'On November 11, 1979 , Bethune Museum and Archives opens in Washington D.C. as a center for African-American women’s history, honoring Mary McLeod Bethune',
              'On November 11, 1993, The Vietnam Women’s Memorial is dedicated in Washington, D.C. after being conceived by former army combat nurse Diane Carlson Evans and sculpted by Glenna Goodacre to honor the 265,000 women who voluntarily served during the Vietnam era',
              'On November 13, 1938 , Mother Francis Xavier Cabrini is beatified, the first American woman citizen to become a saint',
              'On November 14, 1889, Journalist Elizabeth Cochran, aka Nellie Bly, sails around the world in 72 days, 6 hours, 11 minutes, and 14 seconds, beating the fictional record set by Phineas Fogg in Jules Verne’s Around the World in Eighty Days',
              'On November 14, 1903 , The U.S. Women’s Trade Union League is established',
              'On November 14, 1946, Emily Greene Balch, co-founder of the Women’s International League for Peace and Freedom, is awarded the Nobel Peace Prize',
              'On November 28, 1881, The first organizational meeting is held for the predecessor group to the American Association of University Women (AAUW)    ',
              'On December 1, 1955, Rosa Parks refuses to give up her seat on a bus to a white person; her arrest sparks the modern civil rights movement in the US',
              'On December 5, 1935, Mary McLeod Bethune creates the National Council of Negro Women',
              'On December 7, 1941, Capt. Annie Fox receives the first Purple Heart awarded to a woman for her service while under attack at Pearl Harbor',
              'On December 10, 1869,  Wyoming is the first territory to give women the right to vote',
              'On December 10, 1938, Pearl S. Buck receives the Nobel Prize for Literature for The Good Earth',
              'On December 13, 1993, Susan A. Maxman becomes first woman president of the American Institute of Architects in its 135 year history',
              'On December 14, 1961, President’s Commission on the Status of Women is established to examine discrimination against women and ways to eliminate it',
              'On December 14, 1985, Wilma Mankiller is sworn in as principal chief of the Cherokee Nation of Oklahoma the first woman in modern history to lead a major Native American tribe',
              'On December 17, 1993, Judith Rodin is named president of Univ. of Pennsylvania, the first woman to head an Ivy League institution  ',
              'On December 28, 1967, Muriel Siebert becomes the first woman to own a seat on the N.Y. Stock Exchange    '
            ],
            SKILL_NAME: 'Her Story Facts',
            GET_FACT_MESSAGE: "Today in Her Story: ",
            HELP_MESSAGE: 'You can say what happened in herstory today, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Catch Ya Later!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {

        // Get a fact from the Her Story facts list

        // look up the current month
        all_months = ['january','february','march','april','may','june','july','august','september','october','november','december']
        d = new Date();
        month = all_months[d.getMonth()];
        // month = 'October'.toLowerCase();  // or just hard code it

        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        var factsByMonth = [];
        for (var key in factArr) {
          var story = factArr[key];
          if (story.toLowerCase().indexOf(month) !== -1) {
            factsByMonth.push(story);
          }
        }
        // still just picking random but at least month is same
        // #todo find current month+day from timestamp, pick closest day
        const factIndex = Math.floor(Math.random() * factsByMonth.length);
        const randomFact = factsByMonth[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
