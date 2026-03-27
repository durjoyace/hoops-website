# SiTime Channel Directory - Expanded Discovery & Playbook

## Executive Summary

From your 20 seed channels, I expanded the directory to **85+ child channels** with specific URLs, threads, creators, and actionable playbook notes. The discovery focused on where engineers validate timing/oscillator decisions, where they implement, and where they buy.

---

## Key Discovery Findings

### 1. High-Signal Forums (Precedent + Validation)

**EEVblog Forum** - The most active engineering forum for oscillator/timing discussions
- **Key Threads Found:**
  - [MEMS vs Crystal](https://www.eevblog.com/forum/microcontrollers/anything-i-need-to-know-using-a-mems-clock-vs-a-crystal/) - Direct comparison, practical concerns
  - [Crystal vs MEMS (Beginners)](https://www.eevblog.com/forum/beginners/crystal-vs-mems-oscillators/) - Entry-level education
  - [Femtosecond Jitter Discussion](https://www.eevblog.com/forum/projects/femtosecond-jitter-ultra-low-phase-noise-oscillator/) - High-end precision
  - [Low Jitter Clock Reference Recs](https://www.eevblog.com/forum/testgear/cheap-low-jitter(lt10ps)-low-speed-clock-reference-recommendation/) - Budget + performance
  - [FPGA Clock Jitter](https://www.eevblog.com/forum/fpga/generating-a-600khz-clock-with-10ps-jitter/50/) - FPGA-specific

**All About Circuits Forum** - Strong for troubleshooting + education
- [Phase Noise Issues](https://forum.allaboutcircuits.com/threads/crystal-oscillator-phase-noise.32029/)
- [MCU Internal Oscillator Jitter](https://forum.allaboutcircuits.com/threads/16f18877-internal-oscillator-jitter-issues.169113/) - Key recommendation: "Don't use internal RC oscillator for precision timing, ever"
- [Ultra Low Phase Noise Generation](https://forum.allaboutcircuits.com/threads/generating-an-ultra-low-phase-noise-signal.201078/)

**Common Objections/Questions Found:**
1. "MEMS has worse phase noise than quartz" - True for close-in, but SiTime excels in environmental stability
2. "Quartz is cheaper" - Not at low volumes (<6,500 units) when factoring programming/logistics
3. "MEMS has PLL spurs" - Valid concern for some RF apps; position for appropriate use cases

---

### 2. Distribution-Adjacent (Where Purchase Happens)

**DigiKey TechForum** - SiTime has a dedicated support category
- [SiTime Programmable Oscillators Forum](https://forum.digikey.com/c/passives/sitime-programmable-oscillators/56)
- [How to Order Custom SiTime](https://forum.digikey.com/t/how-to-order-custom-sitime-programmable-oscillators/5811)
- [MEMS vs Traditional Oscillator](https://forum.digikey.com/t/mems-oscillator-vs-traditional-oscillator/758)

**Key Insight:** DigiKey FAEs actively help with custom SiTime part numbers. This is a major differentiation point - same-day/next-day programming vs. 12-16 week quartz lead times.

---

### 3. Vendor Forums (Competitive Intelligence)

**TI E2E Clock & Timing Forum**
- Active discussions on clock generators, PLLs, oscillator selection
- Users often ask "which oscillator" questions
- [HCSL Oscillator Recommendations](https://e2e.ti.com/support/clock-timing-group/clock-and-timing/f/clock-timing-forum/1170670/lmk61e07-hcsl-oscillator-recommendation)

**ADI EngineerZone**
- Deep jitter/phase noise discussions for ADC clocking
- [ADC Clock Jitter vs Phase Noise](https://ez.analog.com/other-products/f/q-a/52440/adc-clock--jitter-vs-clock-phase-noise)
- [Clock Input Signal Jitter](https://ez.analog.com/clock_and_timing/f/q-a/20424/clock-input-signal)

**NXP Community**
- [Can MEMS Replace Quartz](https://community.nxp.com/t5/i-MX-Processors/Can-MEMS-oscillators-replace-quartz-crystal-oscillators/m-p/764102) - Direct validation thread

**FPGA Vendor Forums**
- AMD/Xilinx and Intel/Altera forums have clocking discussions
- Common theme: FPGA internal PLLs add jitter, external oscillators often recommended

---

### 4. GitHub Implementation Surface

**SparkFun Official Libraries:**
- [SiT5811 OCXO Arduino Library](https://github.com/sparkfun/SparkFun_SiT5811_OCXO_Arduino_Library) - Active, maintained
- [SiT5358 DCTCXO Arduino Library](https://github.com/sparkfun/SparkFun_SiT5358_DCTCXO_Arduino_Library) - Active, maintained

**Community Projects:**
- [MEMS TCXO 32k OSC Breakout](https://github.com/meerstern/MEMS_TCXO_32kOSC) - SiTime SIT1552AC breakout

**Gap Identified:** Limited Linux kernel driver presence for SiTime specifically (Si544/Si514 are Silicon Labs). Opportunity for Linux driver contributions.

---

### 5. Private Peer Networks (Discord/Slack)

**Discovered Communities:**
- [Embedded Engineering Discord](https://discord.gg/embedded) - 17,767 members
- Embedded Electronics Discord - Growing community
- Electronics For All Slack - Broad embedded/Arduino community

**Playbook:** Seed champions in these communities; offer "office hours" for timing questions.

---

### 6. Trade Media Coverage

**EE Times SiTime Articles Found:**
- [Ruggedized MEMS for Aerospace/Defense](https://www.eetimes.com/sitime-adds-ruggedized-mems-timing-for-aerospace-and-defense/)
- [MEMS Clock ICs for 5G](https://www.eetimes.com/sitime-enters-mems-clock-ics-for-resilient-timing-in-5g-and-outdoors/)
- [Last MEMS Oscillator Maker Standing](https://www.eetimes.com/last-mems-oscillator-maker-standing/) - Market dominance positioning
- [Programmable Oscillators for FPGA](https://www.eetimes.com/programmable-oscillators-enhance-fpga-applications/)

**Signal Integrity Journal:**
- [SiT9501 Differential MEMS](https://www.signalintegrityjournal.com/articles/1831-differential-mems-oscillator-sit9501) - 100G-800G optical
- [SiTime 5G/DC Precision](https://www.signalintegrityjournal.com/articles/2905-sitime-sets-benchmark-in-timing-performance-with-precision-oscillator-for-data-centers-and-5g-infrastructure)

---

### 7. Conference Channels

**DesignCon** - Key signal integrity conference
- Jitter/Noise Track (Track 08) - Submit papers here
- 2024/2025 proceedings have timing-related papers
- Hot topics: 224G PAM4, jitter measurement, SI/PI co-design

**Embedded World** - Key embedded conference
- Nuremberg (March) + North America edition
- Timing for embedded systems is relevant track

---

### 8. Key Influencers Identified

**Signal Integrity Experts:**
- **Eric Bogatin** - Signal Integrity Journal Technical Editor, U of Colorado professor, Teledyne LeCroy Fellow
- **Bert Simonovich** - SI/PI blogger at blog.lamsimenterprises.com

**EEVblog Community:**
- **Dave Jones** - #1089 XTAL Oscillator Teardown video; high credibility
- Active forum contributors in timing/oscillator threads

---

## Actionable Playbook

### Immediate Actions (This Week)

1. **Monitor Key Threads**
   - Set up alerts for "MEMS oscillator", "SiTime", "crystal vs oscillator" on EEVblog, AAC, Reddit
   - Watch DigiKey TechForum for ordering questions

2. **Answer Unanswered Questions**
   - Several threads have misconceptions about MEMS phase noise
   - Provide data-backed responses with links to SiTime whitepapers

3. **Update DigiKey Content**
   - Ensure ordering guides are current
   - Add new product announcements to TechForum

### Short-Term Actions (This Month)

1. **Build Citeable Artifacts**
   - Create canonical answers for common questions:
     - "When to use MEMS vs quartz"
     - "MEMS for FPGA clocking"
     - "Automotive timing requirements"
   - Publish on SiTime Experts Corner, syndicate to communities

2. **GitHub Presence**
   - Support SparkFun library issues
   - Consider Linux driver contributions
   - Create reference implementations for popular MCUs/FPGAs

3. **Discord/Slack Champions**
   - Identify helpful engineers in Embedded Engineering Discord
   - Offer to do timing "office hours" or AMA

### Medium-Term Actions (This Quarter)

1. **Conference Submissions**
   - Submit DesignCon 2026 paper on MEMS jitter advantages
   - Embedded World timing application paper

2. **Influencer Engagement**
   - Pitch Eric Bogatin on Signal Integrity Journal collaboration
   - Offer Dave Jones sample products for teardown content

3. **Content Syndication**
   - Push FPGA timing content to Electronic Design, EEJournal
   - Guest posts on Bert Simonovich's blog

### Ongoing Monitoring

1. **Competitive Intel**
   - Watch TI E2E and ADI EngineerZone for clock IC discussions
   - Track what problems engineers are solving with discrete clocks

2. **Community Sentiment**
   - Reddit r/embedded, r/FPGA for oscillator mentions
   - Track objections and update messaging

---

## Channel Priority Matrix

| Priority | Channel | Why |
|----------|---------|-----|
| HIGH | DigiKey TechForum | Direct purchase influence, active SiTime section |
| HIGH | EEVblog Forum | High-signal engineering discussions, skeptical audience |
| HIGH | SparkFun GitHub repos | Implementation surface, active developers |
| MEDIUM | All About Circuits | Education + troubleshooting, mid-level engineers |
| MEDIUM | Signal Integrity Journal | Authority building, SI expert audience |
| MEDIUM | Embedded Engineering Discord | Peer influence, champion seeding |
| MEDIUM | TI E2E / ADI EZ | Competitive intel, adjacent product discussions |
| LOWER | Reddit | Volume but lower signal; monitor don't prioritize |
| LOWER | LinkedIn Groups | Awareness not depth; syndication only |

---

## Files Generated

1. **sitime-channel-directory-expanded.csv** - Full 85+ channel directory with URLs, threads, contacts, playbook notes
2. **sitime-channel-directory-playbook.md** - This summary document

---

## Next Steps

1. Import CSV into your tracking system (Notion, Airtable, etc.)
2. Assign owners to high-priority channels
3. Set up monitoring/alerting
4. Begin participation on top 5 channels this week
