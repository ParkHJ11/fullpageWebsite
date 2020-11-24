$(function () {
  var $container = $('.portfolio_list ul'),
    $loadMoreBtn = $('#loadmore'),
    // 한번에 표시할 항목 수
    addItemCount = 3,
    // 표시된 항목의 수
    added = 0,
    // 모든 항목 저장
    allData = [];

  //
  $.getJSON('../data/portfolio.json', initGallery);

  function initGallery(data) {
    allData = data;
    additems();

    $loadMoreBtn.click(additems);
  } //initGallery

  function additems() {
    var elements = [],
      slicedData = allData.slice(added, added + addItemCount);

    $.each(slicedData, function (i, item) {
      var itemHTML =
        '<li style="background-image:url(' +
        item.imgUrl +
        ')" class="item ' +
        item.type +
        '">' +
        '<h2 class="title_bar center">' +
        item.title +
        '</h2>' +
        '<p>' +
        item.desc +
        '</p>' +
        '<a href="' +
        item.projectLink +
        '" class="big btn orange">view project</a>' +
        '</li>';

      // get함수는 제이쿼리 객체가 아닌 html객체를 배열로 넘겨준다.
      // 즉, 반복을돌며 html 객체를 만들어서 하나하나 푸시하는것
      elements.push($(itemHTML).get(0));
    }); // slicedData each

    // 컨테이너에 만든 html목록 추가
    $container.append(elements);

    // filter가 있는 페이지에서만 실행
    // if ($('.filters').length) {
    var portfolioContainer = $('.portfolio_list');

    var mixer = mixitup(portfolioContainer, {
      selectors: {
        // filter요소들의 공통 class명
        target: '.item',
      },
      animation: {
        duration: 300,
      },
    });

    // 추가된 리스트아이템을 가지고 다시 리인덱싱
    mixer.forceRefresh();
  } // additems
});
