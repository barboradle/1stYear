// infoDisplay.js

export const monthNames = [
    "Rest & Recovery",
    "Comfort & Convenience",
    "Capture Memories",
    "Gentle Self-Care & Fitness",
    "Mental Health & Downtime",
    "Chic Essentials & Social Support",
    "Encouraging Exploration",
    "Home Comforts & Organization",
    "Fun with Baby & Personal Time",
    "Encouraging Hobbies & Creativity",
    "Reflection & Celebration",
    "First Year Milestone"
  ];
  
  /**
   * Returns the full detailed info (as HTML string) for a given month index.
   */
  export function getInfoText(monthIndex) {
    const infoData = {
      0: `
        <h2>Rest & Recovery</h2>
        <h3>Custom Postpartum Care Hamper</h3>
        <p>Shop for postpartum essentials (nipple cream, comfortable loungewear, natural teas, etc.) at local maternity/baby stores like:</p>
        <ul>
            <li><a href="https://www.babycity.lt/">BabyCity & ToyCity</a> (multiple locations in Vilnius)</li>
            <li><a href="https://www.kotryna.lt/">Kotryna</a></li>
        </ul>
        <h3>Meal Delivery Services</h3>
        <p>Consider gifting credits for food delivery to lighten cooking duties, e.g.:</p>
        <ul>
            <li>Wolt - Restaurant delivery</li>
            <li>Bolt Food - Wide range of cuisines</li>
        </ul>
        <h3>House Cleaning or Laundry Voucher</h3>
        <p>Local cleaning services:</p>
        <ul>
            <li>Search platforms like <a href="https://www.getfix.lt/">Getfix</a> or consider <a href="https://kakava.lt/">Kakava.lt</a> cleaning vouchers (they often feature different household services)</li>
        </ul>
      `,
      1: `
        <h2>Comfort & Convenience</h2>
        <h3>Nursing & Pumping Essentials</h3>
        <p>Look for high-quality nursing bras and accessories:</p>
        <ul>
            <li><a href="https://mamashop.lt/">Mama Shop</a> – Maternity clothing and nursing supplies</li>
            <li><a href="https://www.mothercare.lt/">Mothercare</a> (Lithuania) – If still available locally</li>
        </ul>
        <h3>Spa-at-Home Gift Set</h3>
        <p>Purchase relaxation items (bath bombs, aromatherapy) from local natural cosmetic brands:</p>
        <ul>
            <li><a href="https://uogauoga.lt/">Uoga Uoga</a> – Lithuanian natural skincare, available online and in stores around Vilnius</li>
        </ul>
        <h3>Coffee/Tea Subscription</h3>
        <p>For local roasters or tea purveyors, check:</p>
        <ul>
            <li><a href="https://crooked-nose.com/">Crooked Nose & Coffee Stories</a> – Specialty coffee roastery in Vilnius</li>
        </ul>
      `,
      2: `
        <h2>Capture Memories</h2>
        <h3>Professional Photo Session</h3>
        <p>Photographers in Vilnius to consider:</p>
        <ul>
            <li>Search on <a href="https://www.geradovana.lt/">Geradovana.lt</a> or <a href="https://kakava.lt/">Kakava.lt</a> under “Photo sessions”</li>
        </ul>
        <h3>Custom Photo Book or Calendar</h3>
        <p>Print on demand services like:</p>
        <ul>
            <li><a href="https://www.fotofabrikas.lt/">Fotofabrikas</a> – Photo printing, albums, calendars</li>
            <li><a href="https://copy1.lt/">Copy1</a> – Various printing options, with several Vilnius locations</li>
        </ul>
        <h3>Memory-Keeping Items</h3>
        <p>Craft shops in Vilnius for scrapbook/journal materials:</p>
        <ul>
            <li><a href="https://www.artmanija.lt/">Artmanija</a> (online and store in Vilnius)</li>
        </ul>
      `,
      3: `
        <h2>Gentle Self-Care & Fitness</h2>
        <h3>Postnatal Yoga/Pilates Class Pass</h3>
        <p>Studios offering postpartum yoga/pilates in Vilnius:</p>
        <ul>
            <li><a href="https://yogatherapy.lt/">Yoga Therapy</a> LT</li>
            <li>< a href="https://www.baltipilates.lt/">Balti Pilates</a></li>
        </ul>
        <h3>Self-Care Subscription Box</h3>
        <p>Local lifestyle and beauty boxes may be found on:</p>
        <ul>
            <li><a href="https://groziodraugas.lt/">Grožio draugas</a> – A beauty box subscription (check availability)</li>
        </ul>
        <h3>Motivational Water Bottle & Fitness Tracker</h3>
        <p>Check electronics & sports stores:</p>
        <ul>
            <li><a href="https://www.topocentras.lt/">Topo Centras</a></li>
            <li><a href="https://www.sportland.lt/">Sportland</a></li>
        </ul>
      `,
      4: `
        <h2>Mental Health & Downtime</h2>
        <h3>Therapy or Counseling Sessions</h3>
        <p>Look for mental health professionals in Vilnius:</p>
        <ul>
            <li><a href="https://www.manodaktaras.lt/">ManoDaktaras.lt</a> – Search for psychologists/psychotherapists</li>
        </ul>
        <h3>E-Reader or Book Subscription</h3>
        <p>Bookstores and online retailers:</p>
        <ul>
            <li><a href="https://www.pegasas.lt/">Pegasas</a> – E-readers, gift cards, wide selection of books</li>
            <li><a href="https://vaga.lt/">Vaga</a> – Lithuanian bookstore chain</li>
        </ul>
        <h3>Hobby-Focused Gift</h3>
        <p>For creative classes or craft kits:</p>
        <ul>
            <li><a href="https://www.menuspaustuve.lt/">Menų spaustuvė</a> – Sometimes hosts workshops & events</li>
            <li>[TikTok dirbtuvės / Geri laiko leidimai] – Check <a href="https://kakava.lt/">Kakava.lt</a> or <a href="https://www.geradovana.lt/">Geradovana.lt</a> for various workshop vouchers</li>
        </ul>
      `,
      5: `
        <h2>Chic Essentials & Social Support</h2>
        <h3>Stylish Diaper Bag or Baby Carrier</h3>
        <p>Visit local baby shops or online:</p>
        <ul>
            <li><a href="https://www.babycity.lt/">BabyCity & ToyCity</a></li>
            <li><a href="https://mazylius.lt/">Mazuju augintuvių parduotuvės</a> – Another baby supply store</li>
        </ul>
        <h3>“Mom Day Out” Voucher</h3>
        <p>Combine a babysitting arrangement with a spa or salon gift card:</p>
        <ul>
            <li><a href="https://sugihara.lt/">Sugihara</a> SPA – Known spa & clinic in Vilnius</li>
            <li><a href="https://www.spashanti.lt/">SPA Shanti</a> – Ayurvedic spa in Vilnius</li>
        </ul>
        <h3>Meal Prep or Grocery Delivery Subscription</h3>
        <p>For grocery subscriptions, check:</p>
        <ul>
            <li><a href="https://barbora.lt/">Barbora</a> – Popular grocery delivery in Vilnius</li>
            <li>< a href="https://assorti.lt/">Assorti.lt</a> – Online shop with specialty foods</li>
        </ul>
      `,
      6: `
        <h2>Encouraging Exploration</h2>
        <h3>Mommy-and-Me Classes</h3>
        <p>Look up classes or baby-friendly activities:</p>
        <ul>
            <li><a href="https://mazyliuakademija.lt/">Mažylių akademija</a> – Various classes/workshops for moms & babies</li>
            <li>Swimming lessons (e.g., at <a href="https://www.babyspavilnius.lt/">Baby Spa</a> Vilnius)</li>
        </ul>
        <h3>Stroller Accessories</h3>
        <p>Order online or find in baby gear shops:</p>
        <ul>
            <li><a href="https://www.babycity.lt/">BabyCity & ToyCity</a></li>
            <li><a href="https://kakava.lt/">Kakava.lt Gift Certificates</a> – Sometimes feature children’s store vouchers</li>
        </ul>
        <h3>Customized Jewelry</h3>
        <p>Local jewelers or online personalization:</p>
        <ul>
            <li>Juvelyrika.lv (Vilnius branch) – Check for custom inscriptions</li>
            <li><a href="https://www.etsy.com/">Etsy Shops</a> in Lithuania – Filter by location for local makers</li>
        </ul>
      `,
      7: `
        <h2>Home Comforts & Organization</h2>
        <h3>High-Quality Loungewear/Pajamas</h3>
        <p>Local clothing brands and boutiques:</p>
        <ul>
            <li><a href="https://www.aboutwear.com/">About Wear</a> – Lithuanian brand focusing on natural fabrics</li>
            <li>Reserved – Multiple locations in Vilnius</li>
        </ul>
        <h3>Home Organizer Consultation</h3>
        <p>Search home organizing or interior styling services in Vilnius on freelancer platforms, or check “Organizing” categories on:</p>
        <ul>
            <li><a href="https://www.getfix.lt/">Getfix</a></li>
        </ul>
        <h3>Aromatherapy Diffuser & Oils</h3>
        <p>Visit health shops or pharmacies, for example:</p>
        <ul>
            <li><a href="https://www.eurovaistine.lt/">Eurovaistinė</a> – Sometimes carries diffusers/essential oils</li>
            <li><a href="https://biosala.lt/">Biosala</a> – Natural/organic products</li>
        </ul>
      `,
      8: `
        <h2>Fun with Baby & Personal Time</h2>
        <h3>Interactive Baby Toys or Sensory Kits</h3>
        <p>Local toy shops:</p>
        <ul>
            <li><a href="https://www.zaisluplaneta.lt/">Žaislų planeta</a> – Educational toys</li>
            <li><a href="https://www.kotryna.lt/">Kotryna</a></li>
        </ul>
        <h3>Babysitting Pass</h3>
        <p>Look for vetted babysitters or short-term nanny services:</p>
        <ul>
            <li>Local Facebook groups (e.g., “Vilnius Babysitters”) or specialized websites (like <a href="https://supersitter.lt/">Supersitter.lt</a>)</li>
        </ul>
        <h3>Relaxation App Subscription</h3>
        <p>Gift her a subscription code for:</p>
        <ul>
            <li>Calm, Headspace, or similar apps – can be purchased as a gift card or direct subscription</li>
        </ul>
      `,
      9: `
        <h2>Encouraging Hobbies & Creativity</h2>
        <h3>Cooking Class or Meal Kit Subscription</h3>
        <p>Look for cooking workshops in Vilnius:</p>
        <ul>
            <li>Kulinarinė studija <a href="https://www.ciopciop.lt/">„ČIOP ČIOP“</a> – Group or private cooking classes</li>
            <li>Meal kits from local sites (check <a href="https://barbora.lt/">Barbora</a>)</li>
        </ul>
        <h3>Art or Craft Workshop</h3>
        <p>Check experience platforms or local studios for painting, pottery, candle-making, etc.:</p>
        <ul>
            <li><a href="https://www.geradovana.lt/">Geradovana.lt</a> – Workshops</li>
            <li><a href="https://kakava.lt/">Kakava.lt</a> – Creative experiences</li>
        </ul>
        <h3>Self-Care Journal & Planner</h3>
        <p>Stationery shops:</p>
        <ul>
            <li><a href="https://www.biurooprekes.lt/">Kanceliarinės prekės Biuroo</a></li>
            <li><a href="https://www.pegasas.lt/">Pegasas</a></li>
        </ul>
      `,
      10: `
        <h2>Reflection & Celebration</h2>
        <h3>Printed Photo Collage or Canvas</h3>
        <p>Local printing services:</p>
        <ul>
            <li><a href="https://www.fotofabrikas.lt/">Fotofabrikas</a></li>
            <li><a href="https://copypro.lt/">CopyPro</a></li>
        </ul>
        <h3>Experiential Gift</h3>
        <p>Family membership to local attractions:</p>
        <ul>
            <li><a href="https://www.lvjc.lt/">Lithuanian Children’s and Youth Centre</a> – Some family-oriented activities</li>
            <li><a href="https://zoopark.lt/">Zoos and museums</a> near Vilnius (e.g., Zoopark in Ozas)</li>
        </ul>
        <h3>Date Night Experience</h3>
        <p>Fancy restaurant in Vilnius + babysitter arrangement</p>
        <ul>
            <li><a href="https://www.gasparsrestaurant.com/">Gaspar</a></li>
            <li><a href="https://mykolo4.lt/">Mykolo 4</a></li>
        </ul>
      `,
      11: `
        <h2>First Year Milestone</h2>
        <h3>Keepsake Jewelry or Personalized Gift</h3>
        <p>Tailored pieces from local jewelers (see above suggestions) or customized items from:</p>
        <ul>
            <li><a href="https://www.graviruoti.lt/">Graviruoti.lt</a> – Engraving services in Vilnius</li>
        </ul>
        <h3>A Meaningful “Mom Memory” Book</h3>
        <p>Gather messages from family/friends and print/bind them via local printing:</p>
        <ul>
            <li><a href="https://copy1.lt/">Copy1</a></li>
            <li><a href="https://www.spausdintuvas.lt/">Spausdintuvas.lt</a></li>
        </ul>
        <h3>Family Celebration Package</h3>
        <p>Organize a small gathering or professional photo shoot for the baby’s first birthday:</p>
        <ul>
            <li><a href="https://kakava.lt/">Kakava.lt</a> – Event organization vouchers</li>
            <li><a href="https://www.geradovana.lt/">Geradovana.lt</a> – Party/celebration vouchers</li>
        </ul>
      `
    };
    return infoData[monthIndex] || "";
  }
  