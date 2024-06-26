const newsData = {
    sports: [
        {
            title: "Rohit Sharma in revenge mode as India eye payback for England",
            description: "Rohit Sharma, the captain of the Indian cricket team, is gearing up for a high-stakes match against England with a sense of revenge. The context stems from India's previous encounters with England, where India faced some challenging losses. This time, the Indian team, led by Sharma, is determined to turn the tables and secure a significant victory.",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202406/rohit-sharma-253336174-16x9_0.jpg?VersionId=Z1GWwshjTsxEzojyBe53.DKdA6IwxSk8&size=690:388"
        },
        {
            title: "Euro 2024: Austria stun Netherlands 3-2 to top Group D, France finish second",
            description: "Euro 2024: France fluffed an opportunity to finish on top of Group D after being held 1-1 by Poland in Dortmund. Austria topped the group with a sensational 3-2 win over the Netherlands. France and Austria confirmed their place in the Round of 16.",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/austria-at-euro-2024-250114919-16x9_0.jpg?VersionId=WOlkaJF7.M.uOciiDyIsvYogNktP51wc&size=690:388"
        },
        {
            title: "Igor Stimac vs AIFF: Indian football body strongly counters sacked coach's allegations",
            description: "The All India Football Federation (AIFF) has addressed the recent comments made by former Head Coach Igor Stimac, explaining the reasons behind his contract termination. The federation accused Stimac of unprofessional behaviour and misrepresentation, which they claim justified their decision​ .",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/igor-stimac-19231515-16x9_2.jpg?VersionId=gVJRUazKxUlGgWKMd0HKkyWtJ1qdp9pD&size=690:388"
        },
        {
            title: "Novak Djokovic raises hopes of Wimbledon participation: 'Giving my best to be ready'",
            description: "Novak Djokovic, who has begun training at the All England Club in London, shared a photo from his training session. Djokovic is hopeful of participating in Wimbledon 2024. He underwent surgery to treat a knee issue on June 6.",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/novak-djokovic-254009140-16x9_0.jpg?VersionId=nDfB.p7PhC35RuAhXTpi8jCt7gmNwgJu&size=690:388"
        },
        {
            title: "Aditi Ashok and Diksha Dagar qualify for Paris Olympics 2024",
            description: "Aditi Ashok has qualified for the Paris Olympics 2024, to be held from July 4. She finished fourth when the quadrennial event took place in Tokyo 3 years ago.",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/aditi-ashok-251254347-16x9_0.jpg?VersionId=IcNh1L7b5E7riJDpXUE8blkix6OlKgi8&size=690:388"
        },
        {
            title: "Bajrang Punia suspended by NADA once again for anti-doping rule violation",
            description: "Olympic Medallist Bajrang Punia has been handed a suspension by the National Anti-Doping Agency after a Notice Of Charge was issued by the body on June 23, Sunday.",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/bajrang-punia-has-failed-to-qualify-for-paris-olympics-getty-images-103235733-16x9_0.jpg?VersionId=R.PWCB4s6S5ElYlkIO2EJqISB9EXvBuR&size=690:388"
        },
        {
            title: "My goal is the UFC title: Sergei Pavlovich on Alexander Volkov fight and Jon Jones",
            description: "In an exclusive interaction with India Today, Sergei Pavlovich opened up on why he took the Alexander Volkov fight and the prospect of facing Jon Jones in the heavyweight division.",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/sergei-pavlovich-222822114-16x9_0.jpg?VersionId=E1ztLIQP3o3SADgh1zrkmpge_ihx0p94&size=690:388"
        },
        {
            title: "Neeraj Chopra's gold medal winning throw at Paavo Nurmi Games 2024",
            description: "Olympic champion Neeraj Chopra won the gold medal in men's javelin throw at Paavo Nurmi Games 2024 with an 85.97m throw in Turku, Finland on Tuesday.",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/neeraj-chopra-091946590-16x9_0.jpg?VersionId=l0rt1vfHPi8ZcClZd0T2zEt4wRqaFnfe&size=690:388"
        },
    ],
    politics: [
        {
            title: "Modi 3.0 Cabinet Formation",
            description: "Prime Minister Narendra Modi has started his third term, retaining several key ministers from his previous cabinet while also appointing new faces. Key portfolios have been allocated to BJP and NDA allies, with notable changes in the Women and Child Development Ministry, now headed by Annapurna Devi​ .",
            image: "https://images.news18.com/ibnlive/uploads/2024/05/narendra-modi-interview-2024-05-71f304f66f6d67b704fe4b477d6ab867.png?impolicy=website&width=640&height=480"
        },
        {
            title: "Rahul Gandhi Named Leader of Opposition",
            description: "Congress MP Rahul Gandhi has been appointed as the Leader of the Opposition in Lok Sabha. This decision was taken during a meeting of Congress and its allies​ .",
            image: "https://www.livemint.com/lm-img/img/2024/06/25/600x338/IMG-20240625-WA0046_1719332054579_1719332063592.jpg"
        },
        {
            title: "BJP's Strategic Moves",
            description: "The BJP's strategy to consolidate its OBC vote bank is evident with Annapurna Devi's new role as the Women and Child Development Minister. This move is seen as preparation for upcoming assembly elections.",
            image: "https://myvoice.opindia.com/wp-content/uploads/sites/3/2023/04/bjp-flag-1200x675.jpg-copy.jpg"
        },
        {
            title: "Om Birla receives support from YSRCP in rare Lok Sabha Speaker contest against K Suresh",
            description: "The YSR Congress Party, led by former Chief Minister Jagan Mohan Reddy is set to support Kota MP Om Birla in the Lok Sabha speaker post election taking place on June 26. The Lok Sabha will witness a rare election for the Speaker's post – the first since 1976 – as Congress member Kodikunnil Suresh has been made the opposition candidate against NDA nominee Om Birla.",
            image: "https://www.livemint.com/lm-img/img/2024/06/25/600x338/ANI-20240625309-0_1719329813077_1719329871303.jpg"
        },
        {
            title: "ICC issues arrest warrants for Russia's top security leaders",
            description: "The International Criminal Court issued arrest warrants for Russia's former defense minister and it's army chief for war crimes commited during Moscow's invasion of Ukraine,ramping up its moves against russia following charges against President Vladimir and other officials.",
            image: "https://www.livemint.com/lm-img/img/2024/06/25/600x338/International-Court-Russia-Ukraine-0_1719329286857_1719329341934.jpg"
        },
        {
            title: "Part of Kenya’s parliament burns as thousands of protesters enter; 5 killed",
            description: "Part of Kenya's parliament building was burned on Tuesday as thousands of protesters against a new finance bill entered and legislators fled, in the most direct assault on the government in decades.An NGO Kenya Medical Association said that five people were shot dead and 31 others wounded after police opened fire.",
            image: "https://www.livemint.com/lm-img/img/2024/06/25/600x338/AP06-25-2024-000409B-0_1719327979519_1719328048030.jpg"
        },
        {
            title: "Pakistan delegation allowed access to Ratle power projects on Chenab river in J&K",
            description: "The delegation, which is on the second day of its visit to Kishtwar, visited the 850-MW hydroelectric power project on the Chenab river at Drabshalla village and inspected several units of the project Pakistan has been raising technical objections in different forums, including the Permanent Indus Commission, since 2006 regarding power projects in J&K and even demanded an arbitration by different international forums, which was rejected by India.",
            image: "https://th-i.thgim.com/public/latest-news/3wib2c/article68333694.ece/alternates/LANDSCAPE_660/Ratle.jpg"
        },
        {
            title: "From the first Lok Sabha to the 18th, a snapshot of Speaker elections",
            description: "At least three previous occasions witnessed voting on the floor of the House for the Speaker’s post, while in two other instances, Opposition parties put up a candidate but the Speaker’s election was held on the basis of a voice vote.The hard-fought and polarised election continues to inform the first session of the 18th Lok Sabha with the Lok Sabha Speaker’s post being contested by two candidates, the National Democratic Alliance’s (NDA) Om Birla, who was the Speaker in the 17th Lok Sabha, and eight-term MP from the Congress, K. Suresh.",
            image: "https://th-i.thgim.com/public/incoming/g9x2h6/article68333332.ece/alternates/LANDSCAPE_660/20240625209L.jpg"
        }
        
    ],
    market: [
        {
            title: "Banks Bid Rs 1.6 Trillion in Variable Rate Repo Auction Amid Tightening Liquidity",
            description: "Amid tightening liquidity, banks bid Rs 1.6 trillion in a variable rate repo auction by the RBI, seeking cash amidst a temporary shortage exacerbated by lower government spending post-elections.",
            image: "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/04/11142757/1424700-rbi-1-1.jpg"
        },
        {
            title: "MEA and SBI Sign MoU to Enhance Digital Payments for Migrant Workers via eMigrate Portal",
            description: "The Ministry of External Affairs (MEA) and the State Bank of India (SBI) have formalized a Memorandum of Understanding (MoU) to integrate SBI’s payment gateway, SBIePay, with the eMigrate portal. This collaboration aims to bolster digital payment services for Indian migrant workers, recruiting agents, and users of the portal.",
            image: "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/04/25120902/sbi-atm-1024x576-1.jpg"
        },
        {
            title: "India Surpasses Hong Kong to Reclaim Fourth Spot in Global Equity Market",
            description: "India’s equity market has once again outpaced Hong Kong, securing the position as the world’s fourth-largest by market capitalization. With India’s market value soaring to $5.2 trillion, bolstered by a 10% surge following a post-election market rebound, it now leads Hong Kong, which stands at $5.17 trillion after a 5.4% decline from its peak this year.",
            image: "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/06/15125804/download-2-1.jpg"
        },
        {
            title:"India’s Wholesale Prices Accelerate to 15-Month High of 2.61% in May",
            description: "India’s wholesale inflation, measured by the wholesale price index (WPI), surged to a 15-month high of 2.61% in May from 1.26% in April, driven by an adverse base effect and a sharp increase in food prices. The inflation rate for food items reached 9.82%, contrasting with -3.61% in May 2023.",
            image: "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/04/16110513/47ae35b2_5597_P_8_mr-1-1.jpg"
        },
        {
            title: "Mumbai, Delhi Luxury Real Estate Among Top 5 Globally: Knight Frank",
            description: "Mumbai and Delhi have emerged as top performers in the global luxury real estate market, according to Knight Frank’s recent report, “Prime Global Cities Index January-March 2024”. Both cities recorded significant increases in house prices, positioning them among the top five global cities for prime residential price growth.",
            image: "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/06/15104909/Real-estate-1-1.jpg"
        },
        {
            title: "Meet Sagar Adani: Gautam Adani’s nephew who is leading the charge  in Adani Group's green energy ambitions ",
            description: "With nearly a decade at the Group, Sagar, the son of Rajesh Adani, appears to be fully in command of the green energy company - Adani Green Energy Ltd ( AGEL) where he serves as the executive director.",
            image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/667ada8f50c44-wearing-a-fitted-blue-suit--sagar-adani-patiently-listened-to-ceo-amit-singhs-presentation-but-whe-25561445-16x9.jpg?size=948:533"
        },
        {
            title: "Zurich Insurance Group plans to increase headcount in India by 40%: Report",
            description: "Zurich Insurance Group AG that completed its $666 million purchase of a 70 per cent stake in Kotak General Insurance Company last week, has plans to increase its headcount in the country by 40 per cent. ",
            image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/667a70693aaaf-zurich-insurance-group-to-increase-headcount-in-india-pc-reuters-252319610-16x9.jpg?size=948:533"
        },
        {
            title: "Maruti Suzuki gets GST demand notice of Rs 5.4 crore over input tax credit denial",
            description: "The company has received a show cause notice issued by GST Department, Gujarat for the period July 2017 to March 2023 on account of input tax credit denial on certain services, it said in a disclosure to the exchanges.",
            image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/66797395aa0b1-there-is-no-impact-on-financial--operation-or-other-activities-of-the-company-due-to-this-notice--ms-242436265-16x9.jpg?size=948:533"
        },
    ]
};

function showNews(category) {
    const newsContent = document.getElementById('news-content');
    const cards = newsData[category].map(news => `
        <div class="card">
            <img src="${news.image}" alt="${news.title}">
            <div class="card-content">
                <h2 class="card-title">${news.title}</h2>
                <p class="card-description">${news.description}</p>
            </div>
        </div>
    `).join('');
    newsContent.innerHTML = cards;
}

// Show sports news by default on page load
window.onload = function() {
    showNews('politics');
};
