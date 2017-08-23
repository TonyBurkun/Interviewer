import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import org.testng.log4testng.Logger;
import ui.*;
import utils.*;
import java.io.IOException;
import java.util.Map;
import java.util.HashMap;
import org.json.simple.JSONObject;

import java.util.concurrent.TimeUnit;

public class SideMenu {
    LoginPage loginPage;
    SideMenuPage sideMenuPage;
    WebDriver driver;
    APIClient client = new APIClient("https://interviewer.testrail.net/");


    @BeforeTest(groups = {"functest", "login"})
    public void before() {
        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTY");

        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        System.setProperty("webdriver.chrome.driver", "C:\\selenium\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);
        loginPage = new LoginPage(driver);
        sideMenuPage = new SideMenuPage(driver);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
        loginPage.open();


    }
    @Test(groups = {"functest", "14"})
            public void asserHideMenu() throws InterruptedException {
        Assert.assertTrue(driver.findElement(By.id("sidebar-collapse-btn")).isDisplayed());
        sideMenuPage.clickSidebarButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[1]/div")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/5/14", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }


    @Test(groups = {"functest", "18"})
    public void assertIconsOfMenuItems() throws InterruptedException {

       driver.manage().window().maximize();

    }

    @Test(groups = {"functest", "19"})
    public void assertChangingTemplateItem() throws InterruptedException {
        driver.manage().window().maximize();
        sideMenuPage.clickInterviewsItem();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/div/h3")).isDisplayed());
        sideMenuPage.clickInterviewersItem();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/div/h3")).isDisplayed());
        sideMenuPage.clickVacanciesItem();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/div/h3")).isDisplayed());
        sideMenuPage.clickSeekersItem();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/div/h3")).isDisplayed());
        sideMenuPage.clickProjectsItem();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div[1]/div/a/button")).isDisplayed());
        //TODO change assert for Template


    }

    @Test(groups = {"functest", "20"})
    public void assertActiveItem() throws InterruptedException {
        driver.manage().window().maximize();
        //TODO Check, if the menu item is active and the user navigates to different pages within this menu item: the menu item remains active.


    }

    @Test(groups = {"functest", "21"})
    public void asserItemLinks() throws InterruptedException {
        driver.manage().window().maximize();
        Assert.assertTrue(driver.findElement(By.cssSelector("[maxlength='60']")).isDisplayed());
        //TODO Clicking on the menu items: go to the relevant pages.
    }

    @Test(groups = {"functest", "22"})
    public void errorForFailFunc() throws InterruptedException {
        driver.manage().window().maximize();
        //TODO If the functionality fails, the user hits a specific
    }


    @AfterTest
    public void after() { driver.quit();

    }
}
