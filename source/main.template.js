const templateMain = `
<div class="container">
  <!-- sidebar -->
  <div class="sidebar">

    <div class="sidebar__header">
      <img 
        class="sidebar__header-foto" 
        src="./public/{{ data.foto }}" 
        alt="foto {{ data.name }}" 
        itemprop="image"
      />
    </div>

    <div class="sidebar__section">
      <h2 class="sidebar-section__title">{{ data.i.info }}</h2>
      <table>
        <tr>
          <td>{{ data.i.name }}</td>
          <td>{{ data.name }}</td>
        </tr>
        <tr>
          <td>{{ data.i.email }}</td>
          <td><a href="mailto:{{ data.email }}" itemprop="email">{{ data.email }}</a></td>
        </tr>
        <tr>
          <td>{{ data.i.location }}</td>
          <td>{{ data.location }}</td>
        </tr>
        <tr>
          <td>{{ data.i.employment }}</td>
          <td>{{ data.employment.join(', <wbr>') }}</td>
        </tr>
        <tr>
          <td>{{ data.i.workSchedule }}</td>
          <td>{{ data.workSchedule.join(', <wbr>') }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ data.relocation }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ data.remoteWork }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ data.businessTrip }}</td>
        </tr>
      </table>
    </div>

    <div class="sidebar__section">
      <h2 class="sidebar-section__title">{{ data.i.links }}</h2>
      {% data.links.forEach((link) => { %}
        <a class="sidebar-section__contact-link nowrap" href="{{ link.link }}" target="_blank">
          <span class="link-icon icon-{{ link.icon }}"></span> {{ link.name }}
        </a>
      {% }) %}
    </div>

    <div class="sidebar__section">
      <h2 class="sidebar-section__title">{{ data.i.hobbies }}</h2>
      {{ data.hobbies.join(', <br>') }}.
    </div>

  </div>
  <!-- end sidebar -->

  <!-- content -->
  <div class="content">
    <div class="content__bar">
      <div class="content-bar__download">
        <a href="./public/Nikita_Stroganov_{{ data.local }}.pdf" target="_blank">
          <span class="download-icon icon-pdf"></span>
        </a>
      </div>
      <div class="content-bar__print">
        <span class="download-icon icon-print" onclick="window.print();"></span>
      </div>
      <div class="content-bar__language">
        <!-- <a onClick="switchLanguage('en')" href="#">English</a> -->
        <!-- <br> -->
        <!-- <a onClick="switchLanguage('ru')" href="#ru">Русский</a> -->
      </div>
    </div>

    <div class="content__header">
      <h1 class="content-header__name" itemprop="name">{{ data.name }}</h1>
      <span class="content-header__subtitle caption" itemprop="jobTitle">{{ data.profession }}</span>
    </div>

    <div class="content__section">
      <h2 class="content-section__title">
        <span class="icon icon-profile"></span>
        {{ data.i.about }}
      </h2>
      <br>
      <p>{{ data.about }}</p>
    </div>

    <div class="content__section">

      <h2 class="content-section__title">
        <span class="icon icon-skills"></span>
        {{ data.i.professionalSkills }}
      </h2>
      <br>

      {% data.professionalSkills.forEach((block) => { %} 
        <h4 class="text-decor">{{ block.title }}</h4>
        {{ block.skills.join(' ') }}.
        <br><br>
      {% }) %}
    </div>

    <div class="content__section">
      <h2 class="content-section__title">
        <span class="icon icon-work"></span>
        {{ data.i.work }} - {{ data.f.getTextYear(data.f.getExperienceYear(data.works)) }}
      </h2>
      {% data.works.forEach((work) => { %}
      <div class="content-section__item section-item">
        <div class="section-item__dates">
          <div class="section-item__dates-start">{{ work.dateStart }}</div>
          <div class="section-item__dates-end">
            {{ work.untilNow ? data.i.currentTime : work.dateEnd }}
          </div>
        </div>
        <div class="section-item__body">
          <h4 class="section-item__title">
            {{ work.title }} 
            <span class="nowrap">
              ({{ data.f.getTextYear(work.dateEnd - work.dateStart) }})
            </span>
          </h4>
          <!-- <div class="section-item__subtitle">{{ work.subtitle }}</div> -->
          <div class="section-item__description">
            <ul class="section-item__description">
              {% work.description.forEach((item) => { %}
                <li>{{ item }}</li>
              {% }) %}
            </ul>
          </div>
        </div>
      </div>
      {% }) %}
    </div>

    <div class="page-break"></div>

    <div class="content__section">
      <h2 class="content-section__title">
        <span class="icon icon-project"></span>
        {{ data.i.projects }}
      </h2>
      {% data.projects.forEach((project) => { %}
      <div class="content-section__item section-item">
        <div class="section-item__dates"></div>
        <div class="section-item__body section-item__body-project">
          <h4>
            {% if(project.link) { %}
              <a href="{{ project.link }}" target="_blank">{{ project.title }}</a> 
            {% } else { %}
              {{ project.title }}
            {% } %}
          </h4>
          <div class="section-item__description">{{ project.description }}</div>
        </div>
      </div>
      {% }) %}
    </div>

    <div class="content__section">
      <h2 class="content-section__title">
        <span class="icon icon-education"></span>
        {{ data.i.education }}
      </h2>
      {% data.educations.forEach((education) => { %}
      <div class="content-section__item section-item">
        <div class="section-item__dates">
          <div class="section-item__dates-start">{{ education.dateStart }}</div>
          <div class="section-item__dates-end">{{ education.dateEnd }}</div>
        </div>
        <div class="section-item__body">
          <h4 class="section-item__title">
            {{ education.title }}
            <span class="nowrap">({{ data.f.getTextYear(education.dateEnd-education.dateStart) }})</span>
            </h4>
            {% if(education.subtitle) { %}
              <div class="section-item__subtitle">{{ education.subtitle }}</div>
            {% } %}
            {% if(education.description) { %}
              <div class="section-item__description">{{ education.description }}</div>
            {% } %}
        </div>
      </div>
      {% }) %}
    </div>

    <div class="content__section content__section-signature">
      Stroganov N.
    </div>
    <img src="./public/images/footer.svg" class="footer">
  </div>
  <!-- end content -->
</div>
`;

if (!this.window) module.exports = templateMain;
