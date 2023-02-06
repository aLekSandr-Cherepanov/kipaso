<?php
    require_once 'connect.php';
?>

<div class="hero-block">
    <div class="wrapper-content">
        <?php
            $connectTabl = "SELECT * FROM `test_category_kippribor`";
            $products = mysqli_query($connect, $connectTabl);
            $products = mysqli_fetch_all($products);
            foreach ($products as $product) {
                ?>
                <div class="category-item">
                    <a href="" class="category-item-link">
                        <div class="category-item_name">
                            <h1><?=$product[1]?></h1>
                        </div>
                        <div class="category-item_content">
                            <div class="block-img">
                                <img src=<?=$product[2]?> alt="">
                            </div>
                        </div>
                     </a>
                </div>

                <?php 
            }
        ?>
    </div>
</div>