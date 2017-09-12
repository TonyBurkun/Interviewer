package ui.Projects;

import org.openqa.selenium.By;
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



public class CrateProject {
    WebDriver driver;
    ProjectsPage projectsPage;
    LoginPage loginPage;
    SideMenuPage sideMenuPage;
    CreateProjectPage crateProjectPage;
    APIClient client = new APIClient("https://interviewer.testrail.net/");
    String BaseURL = "https://qa-interviewer.herokuapp.com/";

    @BeforeTest(groups = {"functest"})
    public void before() {
        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTY");


        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        System.setProperty("webdriver.chrome.driver", ".\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
        projectsPage = new ProjectsPage(driver);
        loginPage = new LoginPage(driver);
        sideMenuPage = new SideMenuPage(driver);
        crateProjectPage = new  CreateProjectPage(driver);

    }

    @Test(groups = {"functest", "47", "UI"})
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

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/47", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "141"})
    public void assertUniquenessProjectName() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        crateProjectPage.typeTitle("Tin");
        crateProjectPage.typeDesc("Test");
        crateProjectPage.clickCreateProjectButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/form/div[1]/span")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/141", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "142"})
    public void assertBackToListButton() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.clickBackToListButton();
        String uri = driver.getCurrentUrl();
        Assert.assertEquals(uri, BaseURL+"projects");



        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/142", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "143"})
    public void assertCancelForEmptyForm() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.clickCancelButton();
        String uri = driver.getCurrentUrl();
        Assert.assertEquals(uri, BaseURL+"projects");



        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/143", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "144"})
    public void assertCancelForFilledForm() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeTitle("Test");
        projectsPage.clickCancelButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div")).isDisplayed());

    }

    @Test(groups = {"functest", "144"})
    public void assertCancelForFilledDesc() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeDescr("Test");
        projectsPage.clickCancelButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div")).isDisplayed());

    }

         @Test(dependsOnMethods = {"assertCancelForFilledForm", "assertCancelForFilledDesc"}, groups = {"144"})
         public void sentResultForEmail() throws InstantiationException {

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/144", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }

    @Test(groups = {"functest", "146"})
    public void assertExistenceOfCreatedProject() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeTitle("Test");
        projectsPage.typeDescr("TestTest");
        projectsPage.clickFinalCeateProjectButton();
       // Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"2\"]")).isDisplayed());
        String uri = driver.getCurrentUrl();
   //    Assert.assertEquals(uri, BaseURL+"projects");
       Assert.assertTrue(driver.findElement(By.id("2")).isDisplayed());

//        Assert.assertTrue(driver.findElement(By.name("Test")).isDisplayed());

//        JSONObject body = new JSONObject();
//        body.put("status_id", "1");
//        try {
//            client.sendPost("add_result_for_case/35/146", body);
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (APIException e) {
//            e.printStackTrace();
//        }




    }

    //TODO assert for created project


    @Test(groups = {"functest", "144"})
    public void assertChangeForCreateButton() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeTitle("Test");
            String DiabledButton = driver.findElement(By.id("create-project-submitBtn")).getAttribute("disabled");
        Assert.assertEquals(DiabledButton, "true");
        projectsPage.typeDescr("TestTest");
       //  String AbledButton = driver.findElement(By.id("create-project-submitBtn")).getAttribute("button");
       // Assert.assertEquals(AbledButton, "false");

    }
    //TODO






        @AfterTest(groups = {"functest"})
        public void after() { driver.quit();

        }
    }