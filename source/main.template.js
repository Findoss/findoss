
const templateMain = `
<div class="container">
  <!-- sidebar -->
  <div class="sidebar">

    <div class="sidebar__header">
      <img class="sidebar__header-foto" src="{{ data.foto }}" alt="{{ data.name }}"></img>
    </div>

    <div class="sidebar__section">
      <h2 class="sidebar-section__title">{{ data.i.info }}</h2>
      <table>
        {% data.i.infoTable.forEach((i) => { %}
        <tr>
          <td>{{ i }}</td>
          <td>{{ data[i.toLowerCase()] }}</td>
        </tr>
        {% }) %}
      </table>
    </div>

    <div class="sidebar__section">
      <h2 class="sidebar-section__title">{{ data.i.links }}</h2>
      {% data.links.forEach((link) => { %}
      <p class="sidebar-section__contact-link">
        <a href="{{ link.link }}" target="_blank">
          <span class="link-icon icon-{{ link.icon }}"></span> {{ link.name }}</a>
      </p>
      {% }) %}
    </div>

    <div class="sidebar__section">
      <h2 class="sidebar-section__title">{{ data.i.personalSkills }}</h2>
      {% data.personalSkills.forEach((skill) => { %}
      <span>{{ skill }},</span>
      {% }) %}
    </div>

    <div class="sidebar__section">
      <h2 class="sidebar-section__title">{{ data.i.hobbies }}</h2>
      {% data.hobbies.forEach((hobby) => { %}
      <p>{{ hobby }},</p>
      {% }) %}
    </div>

  </div>
  <!-- end sidebar -->

  <!-- content -->
  <div class="content">
    <div class="content__bar">
      <div class="content-bar__download">
        <a href="http://" target="_blank">
          <span class="download-icon icon-pdf"></span>
        </a>
      </div>
      <div class="content-bar__print">
        <span class="download-icon icon-print" onclick="window.print();"></span>
      </div>
      <div class="content-bar__language">
        <a onClick="switchLanguage('en')" href="#">English</a>
        <br>
        <a onClick="switchLanguage('ru')" href="#ru">Русский</a>
      </div>
    </div>

    <div class="content__header">
      <h1 class="content-header__name">{{ data.name }}</h1>
      <strong class="content-header__subtitle">{{ data.profession }}</strong>
    </div>

    <div class="content__section">
      <span class="icon icon-profile"></span>
      <h2 class="content-section__title">{{ data.i.about }}</h2>
      <br>
      <p>{{ data.about }}</p>
    </div>

    <div class="content__section">
      <span class="icon icon-skills"></span>
      <h2 class="content-section__title">{{ data.i.professionalSkills }}</h2>
      <br>
      {% data.professionalSkills.forEach((block) => { %} 
        <h4><strong>{{ block.title }}</strong></h4>
        {% block.skills.forEach((skill) => { %} 
          {{ skill }}, 
        {% }) %}
        <br><br>
      {% }) %}
    </div>

    <div class="content__section">
      <span class="icon icon-project"></span>
      <h2 class="content-section__title">{{ data.i.projects }}</h2>
      <br> {% data.projects.forEach((project) => { %}
      <div class="content-section__item section-item">
        <div class="section-item__dates"></div>
        <div class="section-item__body section-item__body-project">
          <h4>
            <strong>
              <a href="{{ project.link }}">{{ project.title }}</a>
            </strong>
          </h4>
          <div class="section-item__description">{{ project.description }}</div>
        </div>
      </div>
      {% }) %}
    </div>

    <div class="content__section">
      <span class="icon icon-work"></span>
      <h2 class="content-section__title">{{ data.i.work }}</h2>
      <br> {% data.works.forEach((work) => { %}
      <div class="content-section__item section-item">
        <div class="section-item__dates">
          <div class="section-item__dates-start">{{ work.dateStart }}</div>
          <div class="section-item__dates-end">{{ work.dateEnd }}</div>
        </div>
        <div class="section-item__body">
          <h4 class="section-item__title">{{ work.title }} ({{ data.f.setYear(work.dateEnd-work.dateStart) }})</h4>
          <div class="section-item__subtitle">{{ work.subtitle }}</div>
          <div class="section-item__description">{{ work.description }}</div>
        </div>
      </div>
      {% }) %}
    </div>

    <div class="content__section">
      <span class="icon icon-education"></span>
      <h2 class="content-section__title">{{ data.i.education }}</h2>
      <br> {% data.educations.forEach((education) => { %}
      <div class="content-section__item section-item">
        <div class="section-item__dates">
          <div class="section-item__dates-start">{{ education.dateStart }}</div>
          <div class="section-item__dates-end">{{ education.dateEnd }}</div>
        </div>
        <div class="section-item__body">
          <h4 class="section-item__title">{{ education.title }} ({{ data.f.setYear(education.dateEnd-education.dateStart) }})</h4>
          <div class="section-item__subtitle">{{ education.subtitle }}</div>
          <div class="section-item__description">{{ education.description }}</div>
        </div>
      </div>
      {% }) %}
    </div>

    <div class="content__section content__section-signature">
      Stroganov N.
      <svg version="1.1" id="signature" x="0px" y="0px" viewBox="35 30 355 175" xml:space="preserve">
        <line class="st0" x1="74.2" y1="34.8" x2="74.2" y2="69" />
        <path class="st1" d="M73.7,66c-7.9-10.5-42,11.6-25.3,41.5c5.8,10.3,35.5,12.9,40.8,26.5c2.7,6.8,7.5,27.1-18.5,28.5
            c-4.2,0.2-30.8,4-22.7-16.4" />
        <path class="st2" d="M100.7,58.2c0,0-13,125.8,24.3,91.2" />
        <path class="st3" d="M93.5,132.3c0,0,33.6-13,33.8-9.7c0.4,5.9,6.8,26,5.7,24.2c0.1,3.6-3.6-35,13.8-24"
        />
        <path class="st4" d="M150.2,132.3c19.4-32.8,46.5-12.8,38.3,0.2c-7,11.1-28.2,22.7-29-0.3" />
        <path class="st5" d="M225.6,119.5c0-5-11.7-10.5-18.3-9c-3.9,0.9-18,20,5.3,23.9C224.5,136.4,225.6,119.5,225.6,119.5
            s2.5,33.6,31.5,47c38.4,17.7-47,64.3-75.4,5.8c-5.7-11.7,31.2-28.4,45.2-31c48.7-9.2,138.3-19.3,188.2-10.7"
        />
        <path class="st6" d="M264.6,109.3c0,0-12.1-9.7-20.7-1.8c-3.8,3.5-0.9,16,4.1,16.7c2.2,0.3,11.3-0.2,15.9-7.8
            c1.5-2.4,0-18.7,1.1-15.1c1,3.5,0.5,16.1,3.4,21.2" />
        <path class="st7" d="M282.8,100.8c0,4,2,19.8,3,15.9c2.1-8.4,5.8-18.8,11-17.7c7.8,1.8,7.5,16,15,19.5"
        />
      </svg>
    </div>
    <img src="./public/images/footer.svg" class="footer">
  </div>
  <!-- end content -->
</div>
`;
