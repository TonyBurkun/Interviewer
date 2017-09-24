package ui.Projects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import ui.*;
import utils.*;
import java.io.IOException;

import org.json.simple.JSONObject;

import java.util.concurrent.TimeUnit;


public class ListOfProject {

    WebDriver driver;
    ProjectsPage projectsPage;
    LoginPage loginPage;
    SideMenuPage sideMenuPage;
    CreateProjectPage crateProjectPage;
    APIClient client = new APIClient("https://interviewer1.testrail.net/");
    String BaseURL = "https://qa-interviewer.herokuapp.com/";

    @BeforeTest(groups = {"functest"})
    public void before() {
        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTy");


        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        System.setProperty("webdriver.chrome.driver", ".\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
        projectsPage = new ProjectsPage(driver);
        loginPage = new LoginPage(driver);
        sideMenuPage = new SideMenuPage(driver);
        crateProjectPage = new CreateProjectPage(driver);

    }


    @TestRun(id = "19")
    @TestCase(id = "38")
    @Test(groups = {"functest", "UI"})
    public void assertElementsOnCreateProjectPage() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/div/h3")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"link-to-list\"]")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("create-project-title")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("create-project-descr")).isDisplayed());
        String createDiabledButton = driver.findElement(By.id("create-project-submitBtn")).getAttribute("disabled");
        Assert.assertEquals(createDiabledButton, "true");
        Assert.assertTrue(driver.findElement(By.id("create-project-resetBtn")).isDisplayed());

    }


    @TestRun(id = "19")
    @TestCase(id = "39")
    @Test(groups = {"functest"})
    public void assertClickOnProjectOpenDesc() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();

    }

    //TODO click on proj

    @TestRun(id = "19")
    @TestCase(id = "40")
    @Test(groups = {"functest"})
    public void assertClickOnCreate() throws InterruptedException {



    }
    //TODO click on create

    @TestRun(id = "19")
    @TestCase(id = "44")
    @Test(groups = {"functest"})
    public void assertCreateProjectListUpdate() throws InterruptedException {
        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        crateProjectPage.clickCreateProjectButton();
        projectsPage.typeTitle("1Test");
        projectsPage.typeDescr("TestTest");
        projectsPage.clickFinalCeateProjectButton();
        //  Assert.assertTrue(driver.findElement(By.className("alert")).isDisplayed());
        //  notification alert alert-success alert-dismissible
        String uriProj = driver.getCurrentUrl();
        Assert.assertEquals(uriProj, BaseURL+"#/projects");
        String test = driver.findElement(By.linkText("1Test")).getAttribute("href");
        driver.get(test);
        projectsPage.clickDeleteProjectButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div")).isDisplayed());
        projectsPage.clickYesOnDeletePopup();

    }
// todo accert alert

    @TestRun(id = "19")
    @TestCase(id = "45")
    @Test(groups = {"functest"})
    public void assertDeleteProjectListUpdate() throws InterruptedException {
        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        crateProjectPage.clickCreateProjectButton();
        projectsPage.typeTitle("1Test");
        projectsPage.typeDescr("TestTest");
        projectsPage.clickFinalCeateProjectButton();
        //  Assert.assertTrue(driver.findElement(By.className("alert")).isDisplayed());
        //  notification alert alert-success alert-dismissible
//        Assert.assertTrue(driver.findElement(By.linkText("1Test")).isDisplayed());
        driver.findElement(By.linkText("1Test")).click();
        String ele = driver.findElement(By.linkText("1Test")).getAttribute("aria-expanded");
        Assert.assertEquals(ele, false);
        projectsPage.clickDeleteProjectButton();
        projectsPage.clickYesOnDeletePopup();
        Assert.assertFalse(driver.findElement(By.linkText("1Test")).isDisplayed());

    }
// todo accert alert




    @AfterTest(groups = {"functest", "emailInput", "wrongEmailOrPasswrd", "passwordCheck"})
    public void after() { driver.quit();

    }
}

