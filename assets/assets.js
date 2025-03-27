// Use this file to easily display content on the web page
// Images have to be imported from the folder and exported in the function below to be rendered
import user_image from './user-image.png';
import bluebell_wood from './bluebell_wood.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
//import logo from './logo.png';
//import logo_dark from './logo_dark.png';
import darwin_flower_png_light from './darwin_flower_png_light.png';
import darwin_flower_png_dark from './darwin_flower_png_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
// import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import pete_round from './pete_round.png';
import celtic_header from './Celtic_header.jpg';
import PS_logo from './PS_logo.svg';
import blender_logo from './blender_logo.svg';
import illustrator_logo from './Illustrator_logo.svg';
import javascript_logo from './javascript_logo.svg';
import react_logo from './react_logo.svg';
import substancePainter_logo from './substancePainter_logo.svg';
import zbrush_logo from './zbrush_logo.svg';
import visual_studio from './Visual_Studio_logo.svg';

//exports the images so they can be easily used in web page
export const assets = {
    user_image,
    bluebell_wood,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    PS_logo,
    blender_logo,
    illustrator_logo,
    javascript_logo,
    react_logo,
    substancePainter_logo,
    zbrush_logo,
    visual_studio,
    //logo,
    //logo_dark,
    darwin_flower_png_dark,
    darwin_flower_png_light,
    mail_icon,
    mail_icon_dark,
    // profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    pete_round,
    celtic_header
};

// holds the images for the 'My Portfolio' section.
//these images are stored in the public directory in the folder tree
export const workData = [
    {
      title: 'Voodoo Greenhouse',
      description: 'Website personal project',
      bgImage: '/voodoo_greenhouse_square.jpg',
      icon: assets.send_icon,
      link: 'https://pete-andrew.github.io/animated_template_Voodoo_Greenhouse/',
    },
    {
      title: 'Ebb & Flow Psychology',
      description: 'Client Website',
      bgImage: '/ebb_and_flow_square.jpg',
      icon: assets.send_icon,
      link: 'https://www.ebbandflowpsychology.co.uk/index.html',
    },
    {
      title: 'Ilex Eco Art',
      description: 'Web Design Project',
      bgImage: '/Ilex_eco_art_square.jpg',
      icon: assets.send_icon,
      link: 'https://arnamanatomy.wixsite.com/ilexecoart',
    },
    // {
    //   title: 'UI/UX designing',
    //   description: 'UI/UX Design',
    //   bgImage: '/work-4.png',
    //   icon: assets.send_icon,
    //   link: 'https://example.com',
    // },
  ]



//this list is pulled onto the page through the About.jsx page
// In order to put the education as separate lines I've needed to use a dangerouslySetInnerHTML p tag
export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, HTML, CSS, React, Next Js, currently learning Python' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'MSc Biodiversity <br> BSc Biological Sciences <br> EdX Front-end Bootcamp' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: '<a href="https://github.com/Pete-Andrew" target="_blank"><b>Click here for my GitHub Projects<b></a>' }
];

// list of icons for beneath 
export const toolsData = [
    { icon: assets.vscode, title: 'Visual Studio Code' },
    { icon: assets.git, title: 'Git' },
    { icon: assets.PS_logo, title: 'Adobe Photoshop' },
    { icon: assets.blender_logo, title: 'Blender' },
    { icon: assets.illustrator_logo, title: 'Adobe Illustrator' },
    { icon: assets.javascript_logo, title: 'JavaScript' },
    { icon: assets.PS_logo, title: 'Adobe Photoshop' },
    { icon: assets.react_logo, title: 'React' },
    { icon: assets.substancePainter_logo, title: 'Substance Painter' },
    { icon: assets.visual_studio, title: 'Visual Studio' },
    { icon: assets.zbrush_logo, title: 'ZBrush' }
  ];

  // exports for the what I offer section
export const serviceData = [
  { icon: assets.web_icon, title: 'Web design', description: 'Front end web development and websites', link: '' },
  { icon: assets.mobile_icon, title: 'Full Stack Development', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
  // { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
  { icon: assets.graphics_icon, title: 'Graphics design and Artwork', description: 'I have worked as professional artist and still create and sell models for use in video games and for 3D printing', link: 'https://allmylinks.com/ilexecoart?fbclid=IwY2xjawJKFvFleHRuA2FlbQIxMAABHaRr0-w0J75tbk_UMPYF57ZfcUsJbCVyRCXbaFf6x53MyW8Wnocz9oryoA_aem_OZIHcpefGNCGFmvoxwtcJQ' },
]